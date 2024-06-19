import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import './App.css'

function App() {
  

  return (
    <Router>
      <div>
        <SideBar />
        <div>
          <Header />
        </div>
      </div>
    </Router>
  )
}

export default App
