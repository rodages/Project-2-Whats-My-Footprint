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
    } 
    if(!market){
        //takes params from URL link
        market = useParams().market
    }
    if(!stage){
        stage = useParams().stage
    }
    //checks what to render
    if(stage==="Farm"){
        return <FarmResults market={market} stage={stage} />
    } else if(stages.includes(stage)){
        return <DisCenterFactoryStoreUnspecifiedResults market={market} stage={stage} />
    } 

    return <h1>Something went wrong, please make another query</h1>
}

export default SearchResults