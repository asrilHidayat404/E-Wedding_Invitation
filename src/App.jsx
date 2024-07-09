import './App.css'
import Hero from './components/Hero'
import Info from './components/Info'
import Mempelai from './components/Mempelai'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-slate-200'>
      <div className="landing-page w-full h-screen">
        <Navbar />
        <Hero />
      </div>
      <div>
        <Mempelai />
      </div>
      <div className='mt-10'>
        <Info />
      </div>
    </div>
  )
}


export default App
