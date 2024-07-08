import './App.css'
import Hero from './components/Hero'
import Mempelai from './components/Mempelai'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className=''>
      <div className="landing-page w-full h-screen">
        <Navbar />
        <Hero />
      </div>
      <Mempelai />
    </div>
  )
}


export default App
