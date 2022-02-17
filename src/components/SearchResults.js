import {useState,useEffect,useContext} from 'react'
import { useParams, useLocation} from 'react-router-dom'

import DisCenterFactoryStoreUnspecifiedResults from './MarketStageResults/DisCenterFactoryStoreUnspecifiedResults'
import FarmResults from './MarketStageResults/FarmResults'


function SearchResults(){
    const stages = ["DistributionCenter","Factory","StoreShelf","NoSpecific"]
    let market,stage
    //sets market and stage based on passed params or URL
    if(useLocation().state){
        //sets market and stage based on form passed
        market = useLocation().state.market
        stage = useLocation().state.stage
    } else{
        //takes params from URL link
        market = useParams().market
        stage = useParams().stage
    }
    //checks what to render
    if(stage==="Farm"){
        return <FarmResults market={market} />
    } else if(stages.includes(stage)){
        return <DisCenterFactoryStoreUnspecifiedResults market={market} stage={stage} />
    } 
    //need to do else if statement to check if market is not in stagedropdownbutton available countries or stages - render select market
    

    console.log(market,stage,"params");
    return <h1>Here we will have search results</h1>
}

export default SearchResults