import './App.css'
import Cerita from './components/Cerita'
import Gallery from './components/Gallery'
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
      <div className="mt-10">
        <Cerita />
      </div>
      <div className='mt-20'>
        <Gallery />
      </div>
    </div>
  )
}


export default App
