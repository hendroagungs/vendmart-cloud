import React, {useState} from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer'
import Maps from './Maps';
import Tables from './Tables';
import Login from './Login'

export default function Home (props){
    return(
    <div className="Home">
        {/* {
            (props.user.email === props.admin.email && props.user.password === props.admin.password) ? 
                ( */}
                    <div className='grid grid-cols-6'>
                    <div className='col-start-2 col-end-7'>
                        <NavBar user={props.user} setUser={props.setUser}/>
                    </div>
                    <div className='row-end-3 row-start-1 col-start-1 col-end-2 bg-gray-200'>
                        <SideBar/>  
                    </div>
                    <div className='col-end-7 col-span-5 '>
                        <Maps/>
                        <Tables/>
                    </div>
                    <div className='col-start-1 col-end-7'>
                        <Footer/>
                    </div>
                </div>
                {/* ) 
                : 
                (
                    // <Login user={props.user} setUser={props.setUser}/>
                    <div>gagal</div>
                )                
    } */}
    </div>
    );
}