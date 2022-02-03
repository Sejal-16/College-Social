import React from 'react';
import Home from './pages/home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/login';
import Register from './pages/register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
      return(
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>

    )
        
}

export default App;
