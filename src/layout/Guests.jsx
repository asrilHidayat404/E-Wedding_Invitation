import React, { useEffect, useState } from 'react'

const Guests = () => {
    const [guests, setGuests] = useState([])
    const GetGuest = async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}/all-guests`)
        const results = await response.json()
        setGuests(results.datas)
    }
    useEffect(() => {
        GetGuest()
    }, [])

    const dropUser = async (id) => {
        const validation = confirm("are you sure?")
        if(!validation) return 
        console.log(id)
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}/drop-guest`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id: id })
            });
            const results = await response.json();
            if (results.message) {
              alert(results.message)
            }
          } catch (err) {
            console.error(err);
          }
    }
    return (
        <div className='flex justify-center'>
            <table border="1" cellPadding="20">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Fullname</th>
                        <th>Password</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        guests?.map((guest, i) => {
                            return (
                                <tr key={guest.id}>
                                    <td>{i + 1}</td>
                                    <td>{guest.fullname}</td>
                                    <td>{guest.password}</td>
                                    <td>
                                        <button className='px-5 py-2 bg-blue-500 text-white font-bold round-lg'>update</button>
                                    </td>
                                    <td>
                                        <button onClick={() => dropUser(guest.id)} className='px-5 py-2 bg-red-500 text-white font-bold round-lg'>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Guests