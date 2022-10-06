import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Listings from './pages/Listings';
import Profile from './pages/Profile';
import axios from 'axios';

type User = {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
  phoneNumber: string,
}

function App() {
  const [user, setUser] = useState<User>()

  const getUserData = async () => {
    let users = await axios.get('http://localhost:3001/users')
    console.log(users.data)
    setUser(users.data)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/items" element= {<Listings />} />
        <Route path="/profile/:profile_id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
