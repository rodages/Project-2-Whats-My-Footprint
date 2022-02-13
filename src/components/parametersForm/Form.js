import CountriesDropdown from "./CountriesDropdown";
import StagesDropdown from "./StagesDropdown";
import {useState} from 'react'

function Form({filterSearchResults}){
    const [selectedCountry,setSelectedCountry] = useState("GBR")
    const [selectedStages,setSelectedStages] = useState("Farm");
    return <form>
        <CountriesDropdown 
            class="rows"
            filterSearchResults={filterSearchResults}
            
            />
        <StagesDropdown />

    </form>
}

export default Form