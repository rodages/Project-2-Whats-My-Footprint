// import Dropdown from 'react-bulma-dropdown'
// import {Section, Dropdown} from 'react-bulma-components'
import iso from 'iso-3166-1'
import {useState,useEffect} from 'react'
import filterFunction from './Reusable/filterFunction'

import SearchField from './Reusable/SearchField'


function CountryDropdown(){
    const [dropdownList,setDropdownList] = useState(undefined);
    const [searchTerm,setSearchTerm] = useState("")
    
    useEffect(()=>{
        async function getCountriesNames(){
            const response = await fetch('https://api.carboncloud.com/v0/search', {
                headers: {
                Accept: 'application/json',
                "X-API-KEY" : "95NOSm7wU24EJ3zqf7IN99yFRQkWyhmcThAIwew3",
                },
                })
  
            const data = await response.json()
            const buckets =data.aggregations.Markets.Markets.buckets
            const arr = buckets.map(item=>{
                const {country:countryName,alpha3:countryCode} = iso.whereAlpha3(item.key)
                return {countryName,countryCode}
            })
            arr.sort((current,next)=>current.countryName.localeCompare(next.countryName))
            setDropdownList(arr)
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
        <SearchField setSearchTerm={setSearchTerm} placeholder={"inser searchterm"}/>
        <div className="select is-primary">
            <select>
                <option value="unselected">Select Market &#127757;</option>
                {dropdownList
                .filter(({countryName})=>filterFunction(countryName,searchTerm))
                .map(({countryName,countryCode},i) => {
                    return <option value={countryCode} key={i}>{countryName}
                    </option>})}
            </select>
        </div>
        </>
    )
}
export default CountryDropdown