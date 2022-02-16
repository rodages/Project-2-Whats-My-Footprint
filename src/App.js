import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./components/Layout"
import MainPage from "./components/MainPage"
import SearchHistory from './components/SearchHistory';
import SearchResults from './components/SearchResults';
import {useState,useEffect,createContext} from 'react'
// import About from "./components/About"


function App() {
  const [searchHistoryList,setSearchHistoryList]=useState(["one","two","three"])
  const Context = createContext("Default Value")
  const searchResults = {market:"GBR",stage:"Farm"}


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout searchHistoryList={searchHistoryList} />}>
          <Route index element={<MainPage/>} />
          <Route path="/history" element={
            <Context.Provider value={"hello"}>
              <SearchHistory/>
            </Context.Provider>
          } />
          <Route path={`/search/market=:market&stage=:stage`} element={<SearchResults/>} />
          {/* <Route path="/market" element={<About />} /> */}
          {/* <Route path="/country/:countryName" element={<ShowCountry />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
