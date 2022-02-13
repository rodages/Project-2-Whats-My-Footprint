import CountriesDropdown from "./CountriesDropdown";
import {useState} from 'react'

function Form({filterSearchResults}){
    const [selectedCountry,setSelectedCountry] = useState("GBR")
    const [selectedStages,setSelectedStages] = useState("Farm");
    return <h1>hello</h1>
    return <Form>
        <CountriesDropdown
            filterSearchResults={filterSearchResults}
            
            />

    </Form>
}

export default Form