import {useState,useEffect,useContext} from 'react'

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
                return <div key={i}>
                    <h1>product name: {item.productName}</h1>
                    <img src={`${item.imageUrl}`}/>
                    <ul>
                        <li>product id: {item.id}</li>
                        <li>total footprint: {item.totalFootprint}</li>
                    </ul>
                    <ul>FootprintBreakdown:
                        <li>argiculture :{item.footprintBreakdown.argiculture}</li>
                        <li>fossilFuel : {item.footprintBreakdown.fossiFuel}</li>
                        <li> packaging : {item.footprintBreakdown.packaging}</li>
                        <li>refinement : {item.footprintBreakdown.refinement}</li>
                        <li>storage : {item.footprintBreakdown.storage}</li>
                        <li>transport : {item.footprintBreakdown.transport}</li>
                        <li> undisclosed : {item.footprintBreakdown.undisclosed}</li>
                    </ul>
                    <p>product Info: {item.productInfo}</p>
                    <hr/>


                </div>
            })}
        </>
    )
}

export default DisCenterFactoryStoreUnspecified