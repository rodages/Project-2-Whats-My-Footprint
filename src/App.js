// const iso = require('iso-3166-1');
import iso from 'iso-3166-1'
import react,{useState,useEffect} from 'react'
import Form from './components/parametersForm/Form'

function App() {
  
  function filterSearchResults(arrItemArg,searchTermArg){
    const searchTerm = searchTermArg.trim().toLowerCase()
    const arrItem = arrItemArg.toLowerCase()
    console.log(searchTerm,arrItem)
    if(!searchTerm) return arrItem
    return searchTerm&&arrItem.includes(searchTerm)
  }
  return <h1>Hi</h1>

  return <Form  
    filterSearchResults={filterSearchResults}


  />
}

export default App
