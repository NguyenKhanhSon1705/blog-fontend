import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Main from './layouts/Main'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PostDetails from './pages/PostDetails'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Main/>} >
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/post/:slug' element={<PostDetails/>}></Route>
        </Route>
     </Routes>
    </>
  )
}

export default App
