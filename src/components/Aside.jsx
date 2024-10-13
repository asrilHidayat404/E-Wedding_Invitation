import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <div className="w-64 hidden lg:inline md:inline">
            <aside className="w-64 fixed bg-white h-screen shadow-md">
                <div className="p-4 border-b text-center">
                    <h1 className="text-2xl font-bold text-blue-600 man-name">Real-Day</h1>
                </div>
                <nav className="mt-4">
                    <ul>
                        <li>
                            <Link className='w-full p-4 inline-block hover:bg-gray-200 cursor-pointer' to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link className='w-full p-4 inline-block hover:bg-gray-200 cursor-pointer' to="/dashboard/guests">Guests</Link>
                        </li>
                        <li>
                            <Link className='w-full p-4 inline-block hover:bg-gray-200 cursor-pointer' to="/dashboard/add-guest">Add Guest</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default Aside