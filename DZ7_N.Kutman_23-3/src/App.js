import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import { AboutUs } from './pages/AboutUs/AboutUs'
import { MainPage } from './pages/MainPage/MainPage'
import './App.css'

export default function App() {
  const [ theme, setTheme ] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
      <div className={`app ${theme}`}>

          <div className='btnBox'>
              <button className='themeBtn' onClick={toggleTheme}>Change Theme</button>
          </div>

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/AboutUs/:name' element={<AboutUs />} />
        </Routes>

      </div>
  )
}