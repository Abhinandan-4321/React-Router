import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
