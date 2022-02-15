import {useState,useEffect} from 'react'

import CountryDropdown from '../CountryDropdownButton'
import StageDropdown from '../StageDropdownButton'

function Form(){
    const [marketCode,setMarketCode]=useState("GBR")
    const [stageOption,setStageOption]=useState("Farm");
    function handleSubmitForm(e){

    }

    return <div className="content">
        <p>Select your market and Stage</p>
        <div className="columns has-text-primary-dark">
            <div className="column"><CountryDropdown setMarketCode={setMarketCode}/></div>
            <div className="column"><StageDropdown setStageOption={setStageOption}/></div>
        </div>

        <div className="columns is-centered">
            <div className="control">
                <button className="button is-primary is-small">Check CO2</button>
            </div>
        </div>

    </div>
}

export default Form