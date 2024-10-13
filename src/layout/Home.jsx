import React, { useEffect, useState } from 'react';

const Home = () => {
    const [guests, setGuests] = useState([]);
    const [time, setTime] = useState(new Date());

    // Array untuk nama bulan dan hari
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Function untuk fetch data tamu
    const datas = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}/all-guests`);
            const results = await response.json();
            setGuests(results.datas);
        } catch (err) {
            throw err;
        }
    };

    // Effect untuk meng-update waktu setiap detik
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update waktu setiap 1000ms (1 detik)

        // Cleanup interval ketika komponen di-unmount
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        datas();
    }, []);

    return (
        <div>
            <div className="min-h-screen">
                <div className='flex flex-wrap justify-evenly gap-4 h-full'>
                    {/* Waktu (Clock) */}
                    <div className="bg-green-600 lg:w-[300px] w-full min-h-[100px] text-white p-4 rounded-sm shadow">
                        <div className="text-center">
                            <div className="text-lg">{month[time.getMonth()]}</div>
                            <div className="text-4xl font-bold">{time.getDate()}</div>
                            <div className="text-lg">{weekday[time.getDay()]}</div>
                            <div className="text-2xl font-bold mt-2">
                                {time.getHours()}:{time.getMinutes().toString().padStart(2, '0')}:{time.getSeconds().toString().padStart(2, '0')}
                            </div>
                        </div>
                    </div>
                    
                    {/* Jumlah Undangan */}
                    <div className="bg-blue-600 lg:w-[300px] w-full min-h-[100px] text-white p-4 rounded-sm shadow flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-2xl font-bold">{guests.length}</div>
                            <div className="text-lg">Jumlah Undangan saat ini</div>
                        </div>
                    </div>
                    
                    {/* Visitors Time Out */}
                    <div className="bg-gray-600 lg:w-[300px] w-full min-h-[100px] text-white p-4 rounded-sm shadow flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-2xl font-bold">0</div>
                            <div className="text-lg">VISITORS TIME OUT TODAY</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
