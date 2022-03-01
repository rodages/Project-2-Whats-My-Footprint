import 'bulma/css/bulma.min.css';
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./components/Layout"
import MainPage from "./components/MainPage"
import SearchResults from './components/SearchResults';
import Basket from './components/Basket';
import {useState,useEffect,createContext} from 'react'
import DisplayItemCard from './components/DisplayItemCard';
import About from "./components/About"
export const HistoryContext = createContext()
export const BasketContext = createContext()

function App() {
  const [interestedInArr,setInterestedInArr] = useState([])
  const [wantToAvoidArr,setWantToAvoidArr] = useState([])
  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

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
          <Route path="/about" element={<About />}/>
            
        </Route>
      </Routes>
    </Router>
  )
}

export default App