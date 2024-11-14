import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Main from './layouts/Main'
import Home from './pages/Home'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Main/>} >
            <Route path='/' element={<Home/>}></Route>
        </Route>
     </Routes>
    </>
  )
}

export default App
