import {useState,useEffect,useContext} from 'react'
import StagesItem from './StagesItem';

function DisCenterFactoryStoreUnspecified({market,stage}){
    const [data,setData] = useState(undefined)

    useEffect(()=>{
        async function getProductData(){
            const response = await fetch(`https://api.carboncloud.com/v0/search?q=&market=${market}&gate=${stage}`, {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : "95NOSm7wU24EJ3zqf7IN99yFRQkWyhmcThAIwew3",
                },
                })
            const data = await response.json();
            console.log(data)
            const arr = data.hits.hits.map(item=>{
                console.log(item)
                return {
                    "id":item._id,
                    "productName":item._source.productName,
                    "footprintBreakdown":item._source.footprintBreakdown,
                    "totalFootprint":item._source.totalFootprint,
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
            {data.map((item,i)=>{
                return <StagesItem key={i} item={item} />
            })}
        </>
    )
}

export default DisCenterFactoryStoreUnspecified