import './App.css'
import Hero from './components/Hero'
import Mempelai from './components/Mempelai'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='cont w-full h-screen'>
      <Navbar />
      <Hero />
      <Mempelai />
    </div>
  )
}


export default App
