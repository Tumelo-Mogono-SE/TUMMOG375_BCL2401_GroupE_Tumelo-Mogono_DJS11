import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import './App.css'

function App() {
  

  return (
    <Router>
      <div className='app-container'>
        <SideBar />
        <div className='main-section'>
          <Header />
          <div className='main-content'>

          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
