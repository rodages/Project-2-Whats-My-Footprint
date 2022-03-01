import {useState,useEffect,useContext} from 'react'
import List from '../List/List'
import ListItem from '../List/ListItem'
import TopLists from './TopLists'
import DisplayTabs from '../DisplayTabs'



function Farm({market}){
    const [data,setData] = useState(undefined)
    const [displayPrimaryTab,updateDisplayPrimaryTab] = useState(true)

    useEffect(()=>{
        async function getCountryFarmData(){
            const response = await fetch('https://api.carboncloud.com/v0/search?q=&market=GBR&gate=Farm', {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : "vC6geUlI2W34sDjtXAfcmCGdCGQTS4JrSS9BWgta",
                },
                })
  
            const data = await response.json()
            const hits =data.hits.hits
            const arr = hits.map(item=>{
                return {
                    "id":item._id,
                    "productName":item._source.productName,
                    "market":item._source.locationCode,
                    "totalFootprint":item._source.totalClimateFootprint,
                    

                    "totalCH4Footprint":item._source.totalCh4ClimateFootprint,
                    "totalN2oFootprint":item._source.totalN2oClimateFootprint,
                    "totalCo2Footprint":item._source.totalCo2ClimateFootprint,

                    "co2Breakdown":{
                        "drying":item._source.co2Drying,
                        "irrigation": item._source.co2Irrigation,
                        "farmMachinery": item._source.co2Machinery,
                        "pesticideProduction": item._source.co2PesticideProduction,
                        "Deforestation": item._source.co2LandUseChange,
                        "OrganicSoils": item._source.co2OrganicSoils,
                        "FertilizerProduction": item._source.co2FertilizerProduction,
                    },
                    productInfo:`https://apps.carboncloud.com/climatehub/agricultural-reports/benchmarks/${item._id}`
                }
            })
            arr.sort((current,next)=>current.productName.localeCompare(next.productName))
            setData(arr)
        }
        getCountryFarmData()
    }
    ,[])

    if(!data){
        return <h1>Loading</h1>
    }
    if(data.length<1){
        return <h1>{market} does not have any {stage} data</h1>
    }

    return <>
        <DisplayTabs displayPrimaryTab={displayPrimaryTab} updateDisplayPrimaryTab={updateDisplayPrimaryTab}/>
        {displayPrimaryTab?
        <TopLists data={data} />:
        <List data={data} description="List of All Items" filter={true} />}
    </>
}

export default Farm