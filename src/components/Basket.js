import {useContext} from 'react';
import {BasketContext} from '../App'

function Basket(){
    const[interestedInArr,setInterestedInArr,wantToAvoidArr,setWantToAvoidArr] = useContext(BasketContext)
    console.log(interestedInArr)
    console.log(wantToAvoidArr)
    return <h1>Basket</h1>
}

export default Basket