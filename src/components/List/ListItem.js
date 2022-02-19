import DisplayItemCard from '../DisplayItemCard'
import { BasketContext } from '../../App'
import {useState,useContext,useEffect} from 'react';

import iso from 'iso-3166-1'
import { hasFlag, countries } from 'country-flag-icons'

function ListItem({item,order, iso2Code}){
    const[interestedInArr,setInterestedInArr,wantToAvoidArr,setWantToAvoidArr] = useContext(BasketContext)
    // console.log(interestedInArr)
    // console.log(wantToAvoidArr)

    // console.log(hasFlag(iso2Code))
    // console.log(Flags[iso2Code])

    function handleAdding(arr,setArr){
        setArr([...arr,item])
    }
    function handleRemoving(arr,setArr){
        const index = arr.findIndex(arrItem=>arrItem.id==item.id)
        console.log(index)
        setArr([...arr.slice(0,index),...arr.slice(index+1)])
        
    }

    function checkContextArr(arr){
        return arr.length==0 || !arr.some(arrItem=>arrItem.id==item.id)
    }

    //need to DRY by making a generateButton function
    return <tr>
        <th >{order}</th>
        <td className="button is-normall is-link is-light"
            onClick={()=>
                <DisplayItemCard />
            }
        
        >{item.productName}</td>
        {/* <td><img style={{width:"30px",height:"auto"}}src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${iso2Code}.svg`} /></td> */}
        <td>{item.totalFootprint.toFixed(2)}</td>
        <td>
        { checkContextArr(interestedInArr)?
        <button className="button is-small is-success is-light" onClick={()=>{handleAdding(interestedInArr,setInterestedInArr)}}>Add Item</button> 
        : <button className="button is-small is-warning is-light" onClick={()=>{handleRemoving(interestedInArr,setInterestedInArr)}}>Remove Item</button>

        }</td>
        <td>{ checkContextArr(wantToAvoidArr)?
        <button className="button is-small is-danger is-light" onClick={()=>{handleAdding(wantToAvoidArr,setWantToAvoidArr)}}>Add Item</button> 
        : <button className="button is-small is-warning is-light" onClick={()=>{handleRemoving(wantToAvoidArr,setWantToAvoidArr)}}>Remove Item</button>

        }</td>
    </tr>

}

export default ListItem