import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom"

import CountryDropdown from '../Dropdowns/CountryDropdown'
import StageDropdown from '../Dropdowns/StageDropdown'
import SearchResults from '../SearchResults';

function Form({prompt}){
    const [marketCode,setMarketCode]=useState(undefined)
    const [stageOption,setStageOption]=useState(undefined);
    const navigate = useNavigate()

    function handleSubmitForm(e){
        e.preventDefault()
        if(displayError()){return}
        navigate(`/search/market=${marketCode}&stage=${stageOption}`, {state:{market:marketCode,stage:stageOption}});
    }

    function displayError(){
        const text = "Please select"
        if(!marketCode&&!stageOption){return <p>{text} Market and Stage</p>} 
        else if(!marketCode){return <p>{text} Market</p>}
        else if(!stageOption){return <p>{text} Stage </p>}
        else return ""
    }

    return <div className="content">
        <p>{prompt}</p>
        <div className="columns has-text-primary-dark">
            <div className="column"><CountryDropdown setMarketCode={setMarketCode}/></div>
            <div className="column"><StageDropdown setStageOption={setStageOption}/></div>
        </div>

        <div className="columns is-centered">
            <div className="control has-text-centered">
                {displayError()}
                <button onClick={(e)=>{handleSubmitForm(e)}} className=" button is-primary is-small">Check CO2</button>
            </div>
        </div>

    </div>
}

export default Form