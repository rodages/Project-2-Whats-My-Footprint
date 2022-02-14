import {useState,useEffect} from 'react'


function StageDropdown(){
    // const [dropdownList,setDropdownList] = useState(undefined);
    
    return (
        <div class="select is-primary">
            <select>
                <option>Select Stage &#127981;</option>
                <option value="At distribution Center">DistributionCenter</option>
                <option value="At factory">Factory</option>
                <option value="At farm">Farm</option>
                <option value="At store">StoreShelf</option>
            </select>
        </div>
    )
}
export default StageDropdown

