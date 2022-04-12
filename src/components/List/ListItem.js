import DisplayItemCard from '../DisplayItemCard'
import { BasketContext } from '../../App'
import {useState,useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function ListItem({item,order}){
    const[interestedInArr,setInterestedInArr,wantToAvoidArr,setWantToAvoidArr] = useContext(BasketContext)
    const navigate = useNavigate()

    function handleAdding(arr,setArr){
        setArr([...arr,item])
    }
    function handleRemoving(arr,setArr){
        const index = arr.findIndex(arrItem=>arrItem.id==item.id)
        setArr([...arr.slice(0,index),...arr.slice(index+1)])
    }
    function checkContextArr(arr){
        return arr.length==0 || !arr.some(arrItem=>arrItem.id==item.id)
    }
    function makeAddRemoveButtons(arr,setArr,styling,anotherBasketArr){
        return (anotherBasketArr.some(element=>element.id==item.id)) ?
        <button className="button is-small" title="Item in another basket" disabled>Unavailable</button>
        : checkContextArr(arr) ?
        <button className={`button is-small is-${styling} is-light`} onClick={()=>{handleAdding(arr,setArr)}}>Add Item</button> 
        : <button className="button is-small is-warning is-light" onClick={()=>{handleRemoving(arr,setArr)}}>Remove Item</button>
        
    }
    return <tr>
        <th >{order}</th>
        <td className="button is-normall is-link is-light"
            onClick={()=>navigate(`/displayitem/${item.id}`, {state:{item}})}
        >{item.productName}</td>
        <td>{item.totalFootprint.toFixed(2)}</td>
        <td> { makeAddRemoveButtons(interestedInArr,setInterestedInArr,"success",wantToAvoidArr) } </td>
        <td>{  makeAddRemoveButtons(wantToAvoidArr,setWantToAvoidArr,"danger",interestedInArr) } </td>
    </tr>

}

export default ListItem