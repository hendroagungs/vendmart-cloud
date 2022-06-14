import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ReportMenu from './ReportMenu';
import Footer from './Footer';


const Report = ({user, setUser}) => {
    return(
    <div className='grid grid-cols-6'>
        <div className='col-start-2 col-end-7'>
            {/* <NavBar user={user} setUser={setUser}/> */}
        test
        </div>
        <div className='row-end-3 row-start-1 col-start-1 col-end-2 bg-gray-200'>
            <SideBar/>  
        </div>
        <div className='col-end-7 col-span-5 '>
            <ReportMenu/>
        </div>
        <div className='col-start-1 col-end-7'>
            <Footer/>
        </div>
    </div>
    )
}

export default Report;