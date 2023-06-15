import React from 'react'
import Home from '../'
import Intro from '../pages/Intro'
import Team from '../pages/Team'
import About from '../pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import NewUsers from '../pages/NewUsers'

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Intro/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/team" element={<Team/>}/>
          <Route exact path="/enterDetail" element={<LoginPage/>}/>
          <Route exact path="/newUsers" element={<NewUsers/>}/>

          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    </Router>
  )
}

export default AllRoutes