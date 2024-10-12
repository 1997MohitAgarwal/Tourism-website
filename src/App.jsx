import './App.css'
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Activities from "./components/Activities"
import Booking from "./components/Booking"
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Default route */}
          <Route index element={
            <>
              <Highlights heading="Highlights" />
              <Categories heading="Categories" />
            </>
          } />

          {/* Individual routes for activities */}
          <Route path="/surfing" element={<Activities key="surfing" activity="surfing" />} />
          <Route path="/festival" element={<Activities key="festival" activity="festival" />} />
          <Route path="/volcano" element={<Activities key="volcano" activity="volcano" />} />

          {/* Booking route */}
          <Route path="/book" element={<Booking />} />
        </Routes>
        {/* Footer outside the Routes to keep it constant */}
        <Footer />
      </Router>
    </>
  )
}
