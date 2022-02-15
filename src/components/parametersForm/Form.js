import CountriesDropdown from "./CountriesDropdown";
import StagesDropdown from "./StagesDropdown";
import {useState} from 'react'

function Form({filterSearchResults}){
    const [selectedCountry,setSelectedCountry] = useState("GBR")
    const [selectedStages,setSelectedStages] = useState("Farm");
    return <form>
        <CountriesDropdown 
            filterSearchResults={filterSearchResults}
            
            />
        <StagesDropdown />

    </form>
}

export default Form