import './App.css'
import Cerita from './components/Cerita'
import { Footer } from './components/Footer'
import Gallery from './components/Gallery'
import Hadiah from './components/Hadiah'
import Hero from './components/Hero'
import Info from './components/Info'
import Mempelai from './components/Mempelai'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-slate-200'>
      <section className="landing-page w-full h-screen" id='home'>
        <Hero />
      </section>
      <div>
        <Navbar />
        <main>
          <Mempelai />
          <div className='mt-10'>
            <Info />
          </div>
          <div className="mt-10">
            <Cerita />
          </div>
          <div className='mt-20'>
            <Gallery />
          </div>
          <div className='mt-28'>
            <Hadiah />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}


export default App
