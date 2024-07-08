import { useState } from "react";
const Navbar = () => {
    const [screen, setScreen] = useState(false);
    const handleMenu = () => {
      setScreen(prev => !prev)
    }
    console.log(screen)
    return (
      <nav className='w-full text-slate-200 flex lg:justify-evenly h-16 items-center relative'>
        <div className='lg:flex-[.3] text-center flex-1'>
          <span className="icon">ZilongMiya</span>
        </div>
        <div className="hamburger flex-1 lg:hidden flex justify-end lg:px-0 px-10">
          <svg 
            className="lg:hidden w-6 h-6 text-slate-200 dark:text-white z-10 cursor-pointer" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 17 14"
            onClick={handleMenu}
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </div>
        <div className={`menu lg:flex-[.7] lg:static absolute lg:h-auto top-0 h-screen w-full lg:inline ${screen ? 'lg:inline' : 'hidden'} transition duration-1000 lg:bg-inherit bg-black-rgba`}>
          <ul className='flex justify-evenly lg:flex-row flex-col items-center h-full'>
            <li><a href="">Home</a></li>
            <li><a href="">Undangan</a></li>
            <li><a href="">Mempelai</a></li>
            <li><a href="">Galeri</a></li>
            <li><a href="">Ucapan</a></li>
          </ul>
        </div>
      </nav>
    )
  }
  

  export default Navbar