import {useState,useEffect,useContext} from 'react'
import StagesItem from './StagesItem';
import TopLists from './TopLists';
import List from '../List/List';
import DisplayTabs from '../DisplayTabs';

function DisCenterFactoryStoreUnspecified({market,stage}){
    const [data,setData] = useState(undefined)
    const [displayPrimaryTab,updateDisplayPrimaryTab] = useState(true)

    useEffect(()=>{
        async function getProductData(){
            const response = await fetch(`https://api.carboncloud.com/v0/search?q=&market=${market}&gate=${stage}`, {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : "95NOSm7wU24EJ3zqf7IN99yFRQkWyhmcThAIwew3",
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
            arr.sort((current,next)=>current.productName.localeCompare(next.productName))
            setData(arr)
        }
        getProductData()
    },[])

    if(!data){
        return<h1>Loading Data</h1>
    }
    if(data.length<1){
        return <h1>{market} does not have any {stage} data</h1>
    }
    console.log(data)
    return(
        <>
            <DisplayTabs displayPrimaryTab={displayPrimaryTab} updateDisplayPrimaryTab={updateDisplayPrimaryTab}/>
            {displayPrimaryTab?
            <TopLists data={data} />:
            <List data={data} description="List of All Items" filter={true} />

            }
            {/* {data.map((item,i)=>{
                return <StagesItem key={i} item={item} />
            })} */}
        </>
    )
}

export default DisCenterFactoryStoreUnspecified