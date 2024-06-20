import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'
import ShowList from './components/ShowsList'
import ShowDetail from './components/ShowDetails'
import Favourite from './components/Favourite'
import './App.css'

function App() {
  

  return (
    <Router>
      <div className='app-container'>
        <SideBar />
        <div className='main-section'>
          <Header />
          <div className='main-content'>
            <Routes>
              <Route path="/" exact element={<ShowList />} />
              <Route path="/show/:id" element={<ShowDetail /> }/>
              <Route path="/favorites" element={<Favourite />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
