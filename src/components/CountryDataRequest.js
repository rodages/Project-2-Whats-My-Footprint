import {useState,useEffect} from 'react'
import filterFunction from './Reusable/filterFunction'

import SearchField from './Reusable/SearchField'

function CountryDataRequest() {

    const [farmFoodDict,setFarmFoodDict] = useState(undefined);

    useEffect(()=>{
        async function getCountryFarmData(){
            const response = await fetch('https://api.carboncloud.com/v0/search', {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : "95NOSm7wU24EJ3zqf7IN99yFRQkWyhmcThAIwew3",
                },
                })
  
            const data = await response.json()
            const hits =data.hits.hits
            const foodDict = hits.map(item=>{
                return {
                  [item._source.productName] : 
                    {
                        "Drying":item._source.co2Drying,
                        "Irrigation": item._source.co2Irrigation,
                        "Farm machinery": item._source.co2Machinery,
                        "Pesticide production": item._source.co2PesticideProduction,
                        "Deforestation": item._source.co2LandUseChange,
                        "Farming on drained wetlands (Organic soils)": item._source.co2OrganicSoils,
                        "Fertilizer production": item._source.co2FertilizerProduction,
                        "Total CH4 Climate Footprint": item._source.totalCh4ClimateFootprint,
                        "Total Climate Footprint": item._source.totalClimateFootprint,
                        "Total CO2 Climate Footprint": item._source.totalCo2ClimateFootprint,
                        "Total N2o Climate Footprint": item._source.totalCo2ClimateFootprint
                }}
            })
            setFarmFoodDict(foodDict)
        }
        getCountryFarmData()
    }
    ,[])
}



export default CountryDataRequest