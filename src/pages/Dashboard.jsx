import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Aside from '../components/Aside';
import Home from '../layout/Home';
import { AuthContext } from '../auth/Auth';

const Dashboard = ({children}) => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Jika tidak ada sesi login, alihkan ke halaman login
        if (!isLoggedIn) {
        navigate('/admin-login');
        }
    }, [isLoggedIn, navigate]);
    return (
        <div className="flex">
            <Aside />
            <main className="flex-1">
                <header className="px-6 py-3 shadow-sm w-full flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Dashboard</h2>
                    <div className="flex items-center space-x-12">
                        <div className='flex items-center gap-2'>
                            <img src={`https://static-00.iconduck.com/assets.00/cs-cat-admin-icon-2048x2048-uxu5ni7e.png`} className='w-[40px]' alt="admin" />
                            <span className="text-gray-600 hover:text-gray-800">Admin</span>
                        </div>
                        <button href="#" className="text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-5 rounded-md">Log Out</button>
                    </div>
                </header>
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default Dashboard