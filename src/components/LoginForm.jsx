import { useEffect, useState } from "react";

const LoginForm = ({setLogin}) => {
    const [namalengkap, setNamaLengkap] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState();
    const [isTamu, setIsTamu] = useState('')

    const params = new URLSearchParams({
        username: namalengkap,
        password: password
    }).toString();

    const tamu = () => {
        fetch(`${import.meta.env.VITE_BACKEND_SERVER}/tamu?${params}`)
            .then(response => response.json())
            .then(result => {
                setUser(result)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nama:', namalengkap);
        console.log('Password:', password);
        tamu()
    };

    useEffect(() => {
        console.log(user)
        console.log(user?.result[0]?.nama)
        user?.result[0]?.nama ? setIsTamu(user?.result[0]?.nama) : ''
    }, [user])

    const handleClose = () => {
        setLogin(prev => !prev)
        setVisible(prev => !prev)
    }
    isTamu ? localStorage.setItem('user', isTamu) : ''

    return (
        <div className={`${visible ? 'flex' : 'hidden'} items-center justify-center p-5 lg:p-0 w-full h-screen fixed top-0 bottom-0 right-0 left-0 bg-login`}>
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative">
                <h2 className="text-2xl font-bold mb-6 text-blue-500">Login</h2>
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-blue-500 hover:text-blue-700 rounded-full border-4 border-blue-500 bg-white w-[30px] h-[30px] flex justify-center items-center"
                >
                    <span className="text-lg font-bold  mb-1">×</span>
                </button>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-500">Nama Lengkap</label>
                        <input
                            type="text"
                            id="namaLengkap"
                            name="namaLengkap"
                            value={namalengkap}
                            onChange={(e) => setNamaLengkap(e.target.value)}
                            className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-blue-500">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
