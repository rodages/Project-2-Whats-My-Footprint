import iso from 'iso-3166-1'
import { hasFlag, countries } from 'country-flag-icons'
import { useState } from 'react'

import ListItem from './ListItem'
import filterSearchResults from '../Reusable/filterFunction'

function List({data,description,filter=false,total=false}){
    const [searchTerm,setSearchTerm] = useState("")
    let totalBasketFootprint = undefined
    
    if(total){
        totalBasketFootprint = data.reduce((a,b)=>{
            return a+b.totalFootprint
            },0
            )
        if(isNaN(totalBasketFootprint)){

            totalBasketFootprint=undefined
        }
    }

    return <>
        <div className='columns is-centered mt-4'>
                <div className="is-8 column">

                <h1 className='title columns is-centered text-is-centered ml-4'>{description}</h1>
                {filter?
                <div className='columns is-4 is-centered'>
                <input className="column is-4 input is-info " 
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text" 
                placeholder="Search Item"/>
                <div className='is-4'></div>
                </div>
                :""}
                <div className='columns mt-4 is-centered'>
                    <div className='columns'>

                            <table className=" table is-centered is-half">
                            <thead>
                                <tr>
                                    <th><abbr title={`${description}`}>Order</abbr></th>
                                    <th>Product Name</th>
                                    <th><abbr title="Total Climate Footprint">Total Climate Footprint</abbr></th>
                                    <th><abbr title='Add item to "Interested In" basket'>Interested In Basket</abbr></th>
                                    <th><abbr title='Add item to "Want To Avoid" basket'>Want To Avoid Basket</abbr></th>
                                </tr>
                            </thead>
                            <tfoot>
                                {
                                    totalBasketFootprint?
                                    <tr>
                                        <th></th>
                                        <th>Total</th>
                                        <th>{totalBasketFootprint.toFixed(2)}</th>
                                    </tr>:
                                    <tr></tr>
                                }
                            </tfoot>
                            {!data.length==0? 
                                <tbody>
                                
                                {data
                                .filter(item=>filterSearchResults(item.productName,searchTerm))
                                .map((item,i)=>{
                                    return <ListItem key={i} item={item} order={i+1}/>
                                })}
                            </tbody>:<tbody/>
                            }
                        </table>
                    </div>
                </div>
        </div>
    </div>
    </>
    
}
export default List