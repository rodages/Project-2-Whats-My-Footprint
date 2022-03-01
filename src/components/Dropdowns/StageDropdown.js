function StageDropdown({setStageOption}){
    return (
        <div className="select is-primary">
            <select onChange={(e)=>{setStageOption(e.target.value)}}>
                <option hidden>Select Stage &#127981;</option>
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

