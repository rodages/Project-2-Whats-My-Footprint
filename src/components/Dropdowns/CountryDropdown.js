import iso from 'iso-3166-1'
import {useState,useEffect} from 'react'
import iso3SortedList from '../Reusable/iso3SortedList';

function CountryDropdown({setMarketCode}){
    const [dropdownList,setDropdownList] = useState(undefined);
    
    useEffect(()=>{
        async function getCountriesNames(){
            const response = await fetch('https://api.carboncloud.com/v0/search', {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : process.env.REACT_APP_API_KEY,
                },
                })
            const data = await response.json()
            const buckets =data.aggregations.Markets.Markets.buckets
            // const arr = buckets.map(item=>{
            //     const {country:countryName,alpha3:countryCode} = iso.whereAlpha3(item.key)
            //     return {countryName,countryCode}
            // })
            // arr.sort((current,next)=>current.countryName.localeCompare(next.countryName))
            setDropdownList(iso3SortedList(buckets))
        }
        getCountriesNames()
    }
    ,[])
    if(!dropdownList){
        return (
            <div className="select is-primary">
            <select>
                <option>Loading Markets &#127757;</option>
            </select>
        </div>
        )
    }
    return (<>
        <div className="select is-primary">
            <select onChange={(e)=>{setMarketCode(e.target.value)}}>
                <option value="unselected" hidden>Select Market &#127757;</option>
                {dropdownList
                .map(({countryName,countryCode},i) => {
                    return <option value={countryCode} key={i}>{countryName}
                    </option>})}
            </select>
        </div>
        </>
    )
}
export default CountryDropdown