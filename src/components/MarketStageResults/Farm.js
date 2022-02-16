import {useState,useEffect,useContext} from 'react'

function Farm({market}){
    const [data,setData] = useState(undefined)

    useEffect(()=>{
        async function getCountryFarmData(){
            const response = await fetch('https://api.carboncloud.com/v0/search?q=&market=GBR&gate=Farm', {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : "95NOSm7wU24EJ3zqf7IN99yFRQkWyhmcThAIwew3",
                },
                })
  
            const data = await response.json()
            const hits =data.hits.hits
            const arr = hits.map(item=>{
                console.log(item)
                return {
                    "id":item._id,
                    "name":item._source.productName,
                    "totalClimateFootprint":item._source.totalClimateFootprint,

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
                }
            })
            arr.sort((current,next)=>current.name.localeCompare(next.name))
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

    console.log(data)
    return <>
        {data.map((item,i)=>{
            return <div key={i}>
                <h1>product name: {item.name}</h1>
                <ul>
                    <li>id: {item.id}</li>
                    <li>totalClimateFootprint: {item.totalClimateFootprint}</li>
                    <li><ul>Footprint breakdown:
                        <li>totalCH4Footprint: {item.totalCH4Footprint}</li>
                        <li>totalN2oFootprint: {item.totalN2oFootprint}</li>
                        <li>totalCo2Footprint: {item.totalCo2Footprint}</li>
                        <li><ul>co2breakdown:
                            <li>drying: {item.co2Breakdown.drying}</li>
                            <li>irrigation: {item.co2Breakdown.irrigation}</li>
                            <li>farmMachinery: {item.co2Breakdown.farmMachinery}</li>
                            <li>pesticideProduction: {item.co2Breakdown.pesticideProduction}</li>
                            <li>deforestation: {item.co2Breakdown.deforestation}</li>
                            <li>OrganicSoils: {item.co2Breakdown.OrganicSoils}</li>
                            <li>fertilizerProduction: {item.co2Breakdown.fertilizerProduction}</li>
                        </ul></li>
                    </ul></li>
                </ul>
                <hr/>
            </div>
        })}
    </>
}

export default Farm