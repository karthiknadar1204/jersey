import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import AllProducts from './pages/AllProducts'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/all' element={<AllProducts/>}/>

      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App