import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import AboutYourself from './pages/AboutYourself'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />

        <Route path='/signup' element={ <Signup /> } />

        <Route path='/signin' element={ <Signin /> } />

        <Route path='/aboutyourself' element={ <AboutYourself /> } />

        <Route path='/dashboard' element={ <Dashboard /> } />

      </Routes>
      <Toaster />
    </BrowserRouter>
    
    </>
  )
}

export default App
