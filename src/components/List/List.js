import iso from 'iso-3166-1'
import { hasFlag, countries } from 'country-flag-icons'
import { useState } from 'react'

import ListItem from './ListItem'
import filterSearchResults from '../Reusable/filterFunction'

function List({data,description,filter=false,total=false}){
    const [searchTerm,setSearchTerm] = useState("")
    const iso2Code = iso.whereAlpha3(data[0].market).alpha2
    let totalBasketFootprint = undefined
    
    if(total){
        totalBasketFootprint = data.reduce((a,b)=>{
            return a.totalFootprint+b.totalFootprint
            }
            )
        if(isNaN(totalBasketFootprint)){

            totalBasketFootprint=undefined
        }
    }

    // console.log(iso2Code)
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
                                    {/* <th>Flag</th> */}
                                    <th><abbr title="Total Climate Footprint">Total Climate Footprint</abbr></th>
                                    <th><abbr title='Add item to "Interested In" basket'>Interested In</abbr></th>
                                    <th><abbr title='Add item to "Want To Avoid" basket'>Want To Avoid</abbr></th>
                                    {/* <th><abbr title='Remove Item From Display List'>Delete Item</abbr></th> */}
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
                                {/* <tr>
                                    <th><abbr title={`${description}`}>Order</abbr></th>
                                    <th>Product Name</th>
                                    <th><abbr title="Total Climate Footprint">Footprint</abbr></th>
                                    <th><abbr title='Add item to "Interested In" basket'>Interested In</abbr></th>
                                    <th><abbr title='Add item to "Want To Avoid" basket'>Want To Avoid</abbr></th>
                                </tr> */}
                                    {/* <th>Flag</th> */}
                                    {/* <th><abbr title='Remove Item From Display List'>Delete Item</abbr></th> */}
                            </tfoot>
                            {!data.length==0? 
                                <tbody>
                                
                                {data
                                .filter(item=>filterSearchResults(item.productName,searchTerm))
                                .map((item,i)=>{
                                    return <ListItem key={i} item={item} order={i+1} iso2Code={iso2Code}/>
                                })}
                            </tbody>:<tbody/>
                            }
                            {/* <tbody>
                                
                                {data.map((item,i)=>{
                                    return <ListItem key={i} item={item} order={i+1} iso2Code={iso2Code}/>
                                })}
                            </tbody> */}
                        </table>
                    </div>
                </div>
        </div>
    </div>
    </>
    
}
export default List