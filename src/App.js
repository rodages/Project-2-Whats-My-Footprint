import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import iso from 'iso-3166-1'

import Layout from "./components/Layout"
import MainPage from "./components/HomePage"
import {useState,useEffect} from 'react'
// import About from "./components/About"


function App() {
  const [dropdownList,setDropdownList] = useState(undefined);
    
  useEffect(()=>{
      async function getCountriesNames(){
          const response = await fetch('https://api.carboncloud.com/v0/search', {
              headers: {
              Accept: 'application/json',
              "X-API-KEY" : "95NOSm7wU24EJ3zqf7IN99yFRQkWyhmcThAIwew3",
              },
              })

          const data = await response.json()
          const buckets =data.aggregations.Markets.Markets.buckets
          const arr = buckets.map(item=>{
              const {country:countryName,alpha3:countryCode} = iso.whereAlpha3(item.key)
              return {countryName,countryCode}
          })
          setDropdownList(arr)
      }
      getCountriesNames()
  }
  ,[])

  if(!dropdownList){
    return <p>Loading</p>
}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage dropdownList={dropdownList} />} />
          {/* <Route path="/countries" element={<CountriesList />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/country/:countryName" element={<ShowCountry />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
