import {useState,useEffect} from 'react'


function StageDropdown(){
    const [dropdownList,setDropdownList] = useState(undefined);
    
    return (
        <div className="select is-primary">
            <select>
            {/* default option is set to Farm */}
                <option defaultValue="Farm" hidden>Select Stage &#127981;</option>
                <option value="DistributionCenter">At Distrubtion Center</option>
                <option value="Factory">At Factory</option>
                <option value="Farm">At Farm</option>
                <option value="StoreShelf"> At Store</option>
                <option value="NoSpecific"> Unspecified</option>
            </select>
        </div>
    )
}
export default StageDropdown

