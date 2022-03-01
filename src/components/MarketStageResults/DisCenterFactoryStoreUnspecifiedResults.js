import {useState,useEffect,useContext} from 'react'
import TopLists from './TopLists';
import List from '../List/List';
import DisplayTabs from '../DisplayTabs';
import iso3SortedList from '../Reusable/iso3SortedList';
import {useNavigate} from 'react-router-dom'

function DisCenterFactoryStoreUnspecified({market,stage}){
    const [data,setData] = useState(undefined)
    const [availableMarkets,setAvailableMarkets] = useState(undefined)
    const [displayPrimaryTab,updateDisplayPrimaryTab] = useState(true)
    const navigate=useNavigate()
    

    useEffect(()=>{
        async function getProductData(){
            const response = await fetch(`https://api.carboncloud.com/v0/search?q=&market=${market}&gate=${stage}`, {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : "vC6geUlI2W34sDjtXAfcmCGdCGQTS4JrSS9BWgta",
                },
                })
            const data = await response.json();
            console.log(data)
            const arr = data.hits.hits.map(item=>{
                return {
                    "id":item._id,
                    "productName":item._source.productName,
                    "market":item._source.market,
                    "totalFootprint":item._source.totalFootprint,
                    "footprintBreakdown":item._source.footprintBreakdown,
                    "imageUrl":item._source.imageUrl,
                    "productInfo":item._source.reportUrl
                }
            
            })
            setAvailableMarkets(iso3SortedList(data.aggregations.Markets.Markets.buckets))
            arr.sort((current,next)=>current.productName.localeCompare(next.productName))
            setData(arr)
            
            // console.log(iso3SortedList(data.aggregations.Markets.Markets.buckets))
        }
        getProductData()
    },[market])

    if(!data){
        return<h1>Loading Data</h1>
    }
    if(data.length<1){
        console.log(availableMarkets)
        return (
            <>
                <h1>{market} does not have any {stage} data</h1>
                <div className="select is-primary">
                    <select onChange={(e)=>{
                        const marketCode = e.target.value

                        navigate(`/search/market=${marketCode}&stage=${stage}`, {state:{market:marketCode,stage:stage}});
                        // setMarketCode(e.target.value)}
                        }}>
                        <option value="unselected" hidden>Select Market &#127757;</option>
                        {availableMarkets
                        .map(({countryName,countryCode},i) => {
                            return <option value={countryCode} key={i}>{countryName}
                            </option>})}
                    </select>
                </div>
            </>
        )
    }
    // console.log(data)
    return(
        <>
            <DisplayTabs displayPrimaryTab={displayPrimaryTab} updateDisplayPrimaryTab={updateDisplayPrimaryTab}/>
            {displayPrimaryTab?
            <TopLists data={data} />:
            <List data={data} description="List of All Items" filter={true} />

            }
        </>
    )
}

export default DisCenterFactoryStoreUnspecified