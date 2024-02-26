
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';

import Home from './pages/Home'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'

import { useState } from 'react';

function App() {
  const [isLoggedIn, updateLoginState] = useState(true)

  return (
    <>
      {isLoggedIn ? <Navbar/> : null}

      <div id='content'>
        {/* <Routes>
            <Route path="/"  element={<Home/>}>
              <Route index element={<Home/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
        </Routes> */}
        </div>
      {/* <Home/> */}
      
    </>
  )
}

export default App
