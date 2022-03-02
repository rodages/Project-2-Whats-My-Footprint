import stages from '../Reusable/stagesObj'

function StageDropdown({setStageOption}){
    return (
        <div className="select is-primary">
            <select onChange={(e)=>{setStageOption(e.target.value)}}>
                <option hidden>Select Stage &#127981;</option>
                {Object.entries(stages).map((stage,i)=>{
                    return <option key={i} value={stage[0]}>{stage[1]}</option>
                })}
            </select>
        </div>
    )
}
export default StageDropdown

