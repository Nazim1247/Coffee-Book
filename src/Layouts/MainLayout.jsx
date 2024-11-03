import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster />
            {/* Navbar */}
            <div className='h-16'>
            <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-232px)] py-12 container mx-auto px-12'>
                {/* dynamic */}
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;