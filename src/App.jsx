import './App.css'
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Activities from "./components/Activities"
import Booking from "./components/Booking"
import React,{useState} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  return (
   <>
     <Router>
       <Navbar/>
      <Routes>
        <Route index element={<> <Highlights heading="Highlights"/>
          <Categories heading="Categories"/></>} />
        <Route exact path="/surfing" element={<Activities key="surfing" type="Surfing" activity="Top Surfing spots in Hawaii" image="surfing.png"/>} />
        <Route exact path="/festival" element={<Activities key="festival" type="Traditional Festivals" activity="Top Traditional festivals in Hawaii" image="festival.png"/>} />
        <Route exact path="/volcano"  element={<Activities key="volcano" type="Volcanoes"  activity="Volcano spots in Hawaii" image="volcano.png"/>} />
         <Route exact path="/book"  element={<Booking/>} />
       
      </Routes>
    </Router>
     <Footer status={status}/>
   </>
  )
}
