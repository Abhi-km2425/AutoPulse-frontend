import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Vehicles from './pages/Vehicles'
import Services from './pages/Services'
import Login from './pages/Login'

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/vehicles' element={<Vehicles/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
