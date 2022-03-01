import {useState,useEffect,useContext} from 'react'
import TopLists from './TopLists';
import List from '../List/List';
import DisplayTabs from '../DisplayTabs';
import iso3SortedList from '../Reusable/iso3SortedList';
import {useNavigate} from 'react-router-dom'
import stages from '../Reusable/stagesObj'
import iso from 'iso-3166-1'
import NoCountryData from './NoCountryData';

function DisCenterFactoryStoreUnspecified({market,stage}){
    const [data,setData] = useState(undefined)
    const [availableMarkets,setAvailableMarkets] = useState(undefined)
    const [displayPrimaryTab,updateDisplayPrimaryTab] = useState(true)
    const navigate=useNavigate()
    console.log(iso)
    

    useEffect(()=>{
        async function getProductData(){
            const response = await fetch(`https://api.carboncloud.com/v0/search?q=&market=${market}&gate=${stage}`, {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : process.env.REACT_APP_API_KEY,
                },
                })
            const data = await response.json();
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
        console.log(availableMarkets[0])
        console.log(stages)
        return <NoCountryData stage={stage} market={market} availableMarkets={availableMarkets} />
        return (
            <>
                <h1>{iso.whereAlpha3(market).country} does not have any products from "{stages[stage]}" stage</h1>
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

    return(
        <>
            <DisplayTabs displayPrimaryTab={displayPrimaryTab} updateDisplayPrimaryTab={updateDisplayPrimaryTab}/>
            {displayPrimaryTab?
            <List data={data} description="List of All Items" filter={true} />:
            <TopLists data={data} />

            }
        </>
    )
}

export default DisCenterFactoryStoreUnspecified