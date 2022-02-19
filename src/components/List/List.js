import iso from 'iso-3166-1'
import { hasFlag, countries } from 'country-flag-icons'
import { useState } from 'react'

import ListItem from './ListItem'
import filterSearchResults from '../Reusable/filterFunction'

function List({data,description,filter=false}){
    const [searchTerm,setSearchTerm] = useState("")
    const iso2Code = iso.whereAlpha3(data[0].market).alpha2

    // console.log(iso2Code)
    return <>
        <div className='mt-4'>

        
        <h1 className='subtitle ml-4'>{description}</h1>
        {filter?
        <input className="input is-info is-half" 
        onChange={(e)=>setSearchTerm(e.target.value)}
        type="text" 
        placeholder="Search Item"/>:""}
        <table className="column table is-half">
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
    </>
    
}
export default List