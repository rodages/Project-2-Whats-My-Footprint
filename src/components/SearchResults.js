import {useState,useEffect,useContext} from 'react'
import { useParams, useLocation} from 'react-router-dom'


function SearchResults(){
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
    if(stage==="Farm"){
        console.log("will display Farm data")
        return <h2>showing Farm data</h2>
    }
    const [data,setData] = useState(undefined)

    useEffect(()=>{
        console.log(`will get data`)
    },[])

    console.log(market,stage,"params");
    return <h1>Here we will have search results</h1>
}

export default SearchResults