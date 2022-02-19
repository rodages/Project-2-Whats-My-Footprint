import DisplayTabs from './DisplayTabs'
import {useContext, useState, useEffect} from 'react';
import {BasketContext} from '../App'

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
            <div>
                <DisplayTabs tabOptions={tabOptions} selectedTab ={selectedTab} setSelectedTab={setSelectedTab} />
                <h2 class="title has-text-centered">Title 2</h2>
            </div>
        )
}

export default Basket