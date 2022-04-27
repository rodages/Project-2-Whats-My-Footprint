import DisplayTabs from './DisplayTabs'
import List from './List/List';
import {useContext, useState} from 'react';
import {BasketContext} from '../App'
import EmptyTable from './List/EmptyTable';
import {Link,useNavigate} from 'react-router-dom';
import Form from './Form/Form'

function Basket(){
    const[interestedInArr,setInterestedInArr,wantToAvoidArr,setWantToAvoidArr] = useContext(BasketContext)
    const navigate = useNavigate()

    const tabOptions = ["Interested in","Would like to avoid"]
    const [selectedTab, setSelectedTab] = useState(tabOptions[0])

    if(interestedInArr.length<1 && wantToAvoidArr.length<1){
        return <div className=' mt-4 columns is-centered'>
            <div className='is-centered'>
            <h1 className='title is-centered'>Currently you do not have any products selected</h1>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title has-background-primary-dark has-text-primary-light">
                    You can add products to your basket by doing the following search
                    </p>
                </header>
                <div className="card-content has-background-primary-light">
                    <Form prompt={"Check out food items by markets and food production stages:"}/>
                </div>
            </div>

            </div>
        </div>
        
    }
    return (
        <div>
        <button className= {"button is-ghost"} onClick={() => navigate(-1)}>Go back</button>
        <div className="columns is-centered">
        {interestedInArr.length>0?<List data={interestedInArr} description={"Products Interested In"} total={true} />:<EmptyTable description="There are no items of interest" />}
        {wantToAvoidArr.length>0?<List data={wantToAvoidArr} description={"Products Would Want To Avoid"} total={true} />:<EmptyTable description="There are no items that you want to avoid" />}

        </div>
    </div>
        )
}

export default Basket