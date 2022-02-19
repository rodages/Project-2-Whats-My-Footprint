import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./components/Layout"
import MainPage from "./components/MainPage"
import SearchHistory from './components/SearchHistory';
import SearchResults from './components/SearchResults';
import Basket from './components/Basket';
import {useState,useEffect,createContext} from 'react'
import DisplayItemCard from './components/DisplayItemCard';
// import About from "./components/About"
export const HistoryContext = createContext()
export const BasketContext = createContext()

function App() {
  const [searchHistoryList,setSearchHistoryList]=useState(1)
  const [interestedInArr,setInterestedInArr] = useState([])
  const [wantToAvoidArr,setWantToAvoidArr] = useState([])
  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout searchHistoryList={searchHistoryList} />}>

          <Route index element={<MainPage/>} />

          <Route path="/basket" element={
            <BasketContext.Provider value={[interestedInArr,setInterestedInArr,wantToAvoidArr,setWantToAvoidArr]}>
              <Basket />
            </BasketContext.Provider>
          } />

          <Route path={`/search/market=:market&stage=:stage`} element={
            <BasketContext.Provider value={[interestedInArr,setInterestedInArr,wantToAvoidArr,setWantToAvoidArr]}>
              <SearchResults/>
            </BasketContext.Provider>
          } />
          
          <Route path={'/displayitem/:id'} element={<DisplayItemCard/>} />
            
        </Route>
      </Routes>
    </Router>
  )
}

export default App