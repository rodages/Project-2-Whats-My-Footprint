import {useState,useEffect,useContext} from 'react'
import List from '../List/List'
import ListItem from '../List/ListItem'
import TopLists from './TopLists'
import DisplayTabs from '../DisplayTabs'
import iso3SortedList from '../Reusable/iso3SortedList';



function Farm({market}){
    const [data,setData] = useState(undefined)
    const [availableMarkets,setAvailableMarkets] = useState(undefined)
    const [displayPrimaryTab,updateDisplayPrimaryTab] = useState(true)
    

    useEffect(()=>{
        async function getCountryFarmData(){
            const response = await fetch('https://api.carboncloud.com/v0/search?q=&market=GBR&gate=Farm', {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : process.env.REACT_APP_API_KEY,
                },
                })
  
            const data = await response.json()
            console.log(data)
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
            setAvailableMarkets(iso3SortedList(data.aggregations.Markets.Markets.buckets))
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

    return <>
        <DisplayTabs displayPrimaryTab={displayPrimaryTab} updateDisplayPrimaryTab={updateDisplayPrimaryTab}/>
        {displayPrimaryTab?
        <List data={data} description="List of All Items" filter={true} />:
        <TopLists data={data} />}
    </>
}

export default Farm