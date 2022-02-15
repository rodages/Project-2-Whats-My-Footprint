import {useState,useEffect} from 'react'
import filterFunction from './Reusable/filterFunction'

import SearchField from './Reusable/SearchField'

function StoreDataRequest() {

    const [storeFoodDict,setStoreFoodDict] = useState(undefined);

    useEffect(()=>{
        async function getCountryStoreData(){
            const response = await fetch('https://api.carboncloud.com/v0/search?q=&market=GBR&gate=gate=StoreShelf', {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : "95NOSm7wU24EJ3zqf7IN99yFRQkWyhmcThAIwew3",
                },
                })
  
            const data = await response.json()
            const hits =data.hits.hits
            const foodDict = hits.map(item=>{
                return {
                    "Name":item._source.productName,
                    "Agriculture":item._source.footprintBreakdown.agriculture,
                    "Fossil Fuel": item._source.footprintBreakdown.fossilFuel,
                    "Packaging": item._source.footprintBreakdown.packaging,
                    "Refinement": item._source.footprintBreakdown.refinement,
                    "Storage": item._source.footprintBreakdown.storage,
                    "Transport": item._source.footprintBreakdown.transport,
                    "Undisclosed": item._source.footprintBreakdown.undisclosed,
                    "Total Footprint": item._source.totalFootprint
                }
            })
            setStoreFoodDict(foodDict)
        }
        getCountryStoreData()
    }
    ,[])
}


export default StoreDataRequest