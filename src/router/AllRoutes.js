import React from 'react'
import Home from '../'
import Intro from '../pages/Intro'
import Team from '../pages/Team'
import About from '../pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Intro/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/team" element={<Team/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    </Router>
  )
}

export default AllRoutes