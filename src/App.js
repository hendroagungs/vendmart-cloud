import './App.css';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Maps from './components/Maps';
import Tables from './components/Tables';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Report from './components/Report';
import Modals from './components/Modals';

export default function App (){
  const[user, setUser] = useState({email: '', password: ''});
  const admin = {email: 'test@gmail.com', password: '123456', name:'test'} 
  const [showErrorMessage, setShowErrorMessage] = useState('invisible')
  const [errorMessage, setErrorMessage] = useState('') 

  const Login = (details) => {
    console.log(details);
    if(details.email === admin.email && details.password === admin.password){
      setUser({
        email: details.email,
        password: details.password
      })
    }
    if(details.email !== admin.email ) {
      setErrorMessage('Email atau Password salah')
      setShowErrorMessage('visible')
    }
    if(details.password === '') setErrorMessage('Password tidak boleh kosong')
    if(details.email === '') setErrorMessage('Email tidak boleh kosong')
  }

  const Logout = () => {
    setUser({email: "", password: ""})
    setErrorMessage('')
  }
  return(
  <div>
      {
          (user.email === admin.email && user.password === admin.password) ? 
              (
              <div className='grid grid-cols-6'>
                  <div className='col-start-2 col-end-7'>
                      <NavBar user={user} setUser={setUser}/>
                  </div>
                  <div className='row-end-3 row-start-1 col-start-1 col-end-2 bg-gray-200'>
                      <SideBar Logout={Logout}/>  
                  </div>
                  <div className='col-end-7 col-span-5 '>
                      <Maps/>
                      <Tables/>
                  </div>
                  <div className='col-start-1 col-end-7'>
                      <Footer/>
                  </div>
              </div>
              ) 
              : 
              (
                  <LoginForm user={user} setUser={setUser} Login={Login} showErrorMessage={showErrorMessage} setShowErrorMessage={setShowErrorMessage} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
              )                
  } 
  </div>
  );
}