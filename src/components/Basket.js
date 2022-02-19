import DisplayTabs from './DisplayTabs'
import List from './List/List';
import {useContext, useState, useEffect} from 'react';
import {BasketContext} from '../App'
import EmptyTable from './List/EmptyTable';

function Basket(){
    const[interestedInArr,setInterestedInArr,wantToAvoidArr,setWantToAvoidArr] = useContext(BasketContext)

    const tabOptions = ["Interested in","Would like to avoid"]
    const [selectedTab, setSelectedTab] = useState(tabOptions[0])
    // useEffect(()=>{
    //     console.log(selectedTab)
    // },[selectedTab])


    console.log(interestedInArr)
    console.log(wantToAvoidArr)
    return (
        <div className="columns is-centered">
        
        {interestedInArr.length>0?<List data={interestedInArr} description={"Interested in"} />:<EmptyTable description="There are no items of interest" />}
        {wantToAvoidArr.length>0?<List data={wantToAvoidArr} description={"Would like to Avoid"} />:<EmptyTable description="There are no items that you want to avoid" />}
    </div>
        )
}

export default Basket