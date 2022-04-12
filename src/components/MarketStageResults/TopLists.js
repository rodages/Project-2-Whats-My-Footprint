
import List from '../List/List'
import ListItem from '../List/ListItem'


function TopLists({data}){
    
    return (
    <>  <p></p>
        <div className="columns is-centered">
        <List data={[...data].sort((a,b)=>b.totalFootprint-a.totalFootprint).slice(0,10)} description={"Most Emissive Products"}/>
        <List data={[...data].sort((a,b)=>a.totalFootprint-b.totalFootprint).slice(0,10)} description={"Least Emissive Products"} />
        </div>
    </>
    
    )
}

export default TopLists