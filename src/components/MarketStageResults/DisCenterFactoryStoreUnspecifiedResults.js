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
    

    useEffect(()=>{
        async function getProductData(){
            const response = await fetch(`https://api.carboncloud.com/v0/search?q=&market=${market}&gate=${stage}`, {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : `${process.env.REACT_APP_API_KEY}`,
                },
                })
            const data = await response.json();
            const arr = data.hits.map(item=>{
                const nested = item.contents[1]
                return {

                    id:item.contents[0],
                    productName:nested.productName,
                    market:nested.market,
                    totalFootprint:nested.totalFootprint,
                    imageUrl:nested.imageUrl,
                    productInfo:nested.reportUrl,
                    footprintBreakdown:nested.footprintBreakdown
                }
            })

            setAvailableMarkets(iso3SortedList(Object.keys(data.aggregations.markets)))
            arr.sort((current,next)=>current.productName.localeCompare(next.productName))
            setData(arr)
            
        }
        getProductData()
    },[market])

    if(!data){
        return<h1>Loading Data</h1>
    }
    if(data.length<1){

        return <NoCountryData stage={stage} market={market} availableMarkets={availableMarkets} />
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