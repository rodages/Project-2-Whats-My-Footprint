import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./components/Layout"
import MainPage from "./components/MainPage"
import {useState,useEffect} from 'react'
// import About from "./components/About"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage/>} />
          {/* <Route path="/countries" element={<CountriesList />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/country/:countryName" element={<ShowCountry />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
