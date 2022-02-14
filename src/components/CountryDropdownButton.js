// import Dropdown from 'react-bulma-dropdown'
// import {Section, Dropdown} from 'react-bulma-components'
// import iso from 'iso-3166-1'
// import {useState,useEffect} from 'react'


function CountryDropdown({dropdownList}){
    return (
        <div class="select is-primary">
            <select>
                <option key="0">Select Market &#127757;</option>
                {dropdownList.map(i => {return <option key={i.countryCode}>{i.countryName}</option>})}
            </select>
        </div>
    )
}
export default CountryDropdown