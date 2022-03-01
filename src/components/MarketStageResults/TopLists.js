
import List from '../List/List'
import ListItem from '../List/ListItem'


function TopLists({data}){
    
    return <div className="columns is-centered">
        <List data={[...data].sort((a,b)=>a.totalFootprint-b.totalFootprint).slice(0,10)} description={"Ascending Total Footprint"} />
        <List data={[...data].sort((a,b)=>b.totalFootprint-a.totalFootprint).slice(0,10)} description={"Descending Total Footprint"}/>
    </div>
}

export default TopLists