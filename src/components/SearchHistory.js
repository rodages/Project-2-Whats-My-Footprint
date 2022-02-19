import {useContext} from 'react'
import {HistoryContext} from '../App'



function SearchHistory(props){
    const [searchHistoryList,setSearchHistoryList] = useContext(HistoryContext)
    console.log(searchHistoryList,setSearchHistoryList)
    
    return <>
    <DisplayContext />
    <IncreaseContext searchHistoryList={searchHistoryList} />
    </>
    
        
}
function DisplayContext(){
    const [searchHistoryList,setSearchHistoryList] = useContext(HistoryContext)
    console.log(searchHistoryList)
    return <h1>{searchHistoryList}</h1>
}
function IncreaseContext(props){
    const [searchHistoryList,setSearchHistoryList] = useContext(HistoryContext)
    console.log(searchHistoryList,props)
    return <button onClick={()=>setSearchHistoryList(searchHistoryList+1)}>Increase</button>
}

export default SearchHistory