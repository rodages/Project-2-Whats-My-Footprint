import {useState} from 'react';
import iso from 'iso-3166-1'
import { hasFlag, countries } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

function TopLists({data}){
    const [currentData,setCurrentData] = useState(data)
    return <div className="columns">
        <TopList />
    </div>
}
function TopList({data,sortingDescription}){
    const iso2Code = iso.whereAlpha3(data[0].market).alpha2
    console.log(iso2Code)
    return <table className="table">
        <thead>
            <tr>
                <th><abbr title={`${sortingDescription}`}>Order</abbr></th>
                <th>Product Name</th>
                <th>Flag</th>
                <th><abbr title="Total Climate Footprint">Footprint</abbr></th>
                <th><abbr title='Add item to "Interested In" basket'>Interested In</abbr></th>
                <th><abbr title='Add item to "Want To Avoid" basket'>Want To Avoid</abbr></th>
                {/* <th><abbr title='Remove Item From Display List'>Delete Item</abbr></th> */}
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th><abbr title={`${sortingDescription}`}>Order</abbr></th>
                <th>Product Name</th>
                <th>Flag</th>
                <th><abbr title="Total Climate Footprint">Footprint</abbr></th>
                <th><abbr title='Add item to "Interested In" basket'>Interested In</abbr></th>
                <th><abbr title='Add item to "Want To Avoid" basket'>Want To Avoid</abbr></th>
                {/* <th><abbr title='Remove Item From Display List'>Delete Item</abbr></th> */}
            </tr>
        </tfoot>
        <tbody>
            {data.map((item,i)=>{
                return <ListItem key={i} item={item} order={i+1} iso2Code={iso2Code}/>
            })}
        </tbody>
    </table>
}

function ListItem({item,order, iso2Code}){
    console.log(hasFlag(iso2Code))
    // console.log(Flags[iso2Code])
    return <tr>
        <th>{order}</th>
        <td>{item.productName}</td>
        <td><img style={{width:"30px",height:"auto"}}src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${iso2Code}.svg`} /></td>
        <td>{item.totalFootprint.toFixed(2)}</td>
        <td>Interested</td>
        <td>Not Interested</td>
    </tr>

}

export default TopList