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
import FullListingCard from './components/FullListingCard';
import BASE_URL from './services/api'

interface User {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  passwordDigest: string,
  phoneNumber: string,
}

function App() {
  let initialUserValues: User = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    passwordDigest: '',
    phoneNumber: '',
  }

  const [allUsers, setAllUsers] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<User>(initialUserValues)

  const getUserData = async () => {
    let users = await axios.get(`${BASE_URL}/users`)
    console.log(users.data)
    setAllUsers(users.data)
  }

  useEffect(() => {
    getUserData()
    console.log(currentUser)
  }, [currentUser])

  return (
    <div className="App">
      <NavBar currentUser={currentUser} initialUserValues={initialUserValues} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login allUsers={allUsers} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/items" element= {<Listings user={currentUser}/>} />
        <Route path="/profile/:profile_id" element={<Profile />} />
        <Route path="/items/:itemId" element={<FullListingCard user={currentUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
