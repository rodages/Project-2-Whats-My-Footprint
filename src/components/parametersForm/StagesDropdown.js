import { useState } from "react";

function StagesDropdown(){
    function createStageRadio(displayName,value){
        return <div className="column">
                <label for={value}>{displayName}</label>
                <input 
                type="radio" 
                id={value}
                defaultChecked={displayName === "Farm"?'defaultChecked':''} 
                name="stage-choice" 
                // tag={countryName} probably not needed
                value={value}/>
            </div>
    }
    return <>
    {createStageRadio("At distribution Center","DistributionCenter")}
    {createStageRadio("At factory","Factory")}
    {createStageRadio("At farm","Farm")}
    {createStageRadio("At store","StoreShelf")}
    {createStageRadio("Unspecified","NoSpecific")}
   
    </>
}

export default StagesDropdown