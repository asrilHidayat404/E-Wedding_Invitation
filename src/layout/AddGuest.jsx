import React, { useState } from 'react';

const AddGuest = () => {
  const [guestData, setGuestData] = useState({
    fullname: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestData(prevState => ({
      ...prevState, // Menjaga field yang sudah ada
      [name]: value // Memperbarui field yang sesuai
    }));
  };

  const datas = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}/add-guest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname: guestData.fullname, password: guestData.password }),
      });
      const results = await response.json();
      if (results.message) {
        alert(results.message)
        setGuestData({
          fullname: "",
          password: ""
        });
      }
      console.log(results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="p-8 rounded-lg max-w-full w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Guest</h2>
        <form className="space-y-6" onSubmit={datas}>
          {/* Full Name Input */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={guestData.fullname}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter guest's full name"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={guestData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter guest's password"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
              Add Guest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGuest;
