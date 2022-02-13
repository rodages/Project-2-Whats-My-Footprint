// const iso = require('iso-3166-1');
import iso from 'iso-3166-1'
import react,{useState,useEffect} from 'react'

import SearchField from './SearchField';

function CountriesDropdown({filterSearchResults}) {
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
      const response2 = await response.json()
      const data = await response2
      // console.log(data)
      const buckets =data.aggregations.Markets.Markets.buckets
      // console.log(buckets)
      // console.log(iso)
      const arr = buckets.map(item=>{
        
        const {country:countryName,alpha3:countryCode} = iso.whereAlpha3(item.key)
        return {countryName,countryCode}
      })
      // console.log(arr)
      setDropdownList(arr)
      console.log(dropdownList,'dropDown')
    }
    getCountriesNames()
  }
  
  ,[])

  ///need to change something for loading time
  
  if(!dropdownList){
    return <h1>Loading</h1>
  }
  console.log(dropdownList)

  return <>
    <form>
    <SearchField setSearchTerm={setSearchTerm}/>
    {dropdownList
    .filter(item=>filterSearchResults(item.countryName,searchTerm)) //passed from App.js
    .map(({countryCode,countryName},i)=>{
      return (
            <div key={i} className="column">
                <label>{countryName}</label>
                <input 
                type="radio" 
                defaultChecked={countryCode === "GBR"?'defaultChecked':''} 
                name="country-choice" 
                // tag={countryName} probably not needed
                value={countryCode}/>
            </div>
            );
    })}
    </form>
    

  </>
}

export default CountriesDropdown
