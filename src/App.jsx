import { useRef } from 'react'
import './App.css'
import Cerita from './components/Cerita'
import { Footer } from './components/Footer'
import Gallery from './components/Gallery'
import Hadiah from './components/Hadiah'
import Hero from './components/Hero'
import Info from './components/Info'
import Mempelai from './components/Mempelai'
import Navbar from './components/Navbar'
import CommentsList from './components/CommentList'

const App = () => {
  const point = {
    hero: useRef(null),
    undangan: useRef(null),
    info: useRef(null),
    galeri: useRef(null),
    komen: useRef(null)
  }
  return (
    <div className='bg-slate-200'>
      <section className="landing-page w-full h-screen" id='hero' ref={point.hero}>
        <Hero />
      </section>
      <div>
        <Navbar hero={point.hero} undangan={point.undangan} info={point.info} galeri={point.galeri} comment={point.komen} />
        <main>
          <section id='undangan' ref={point.undangan}>
            <Mempelai />
          </section>
          <section id='info' ref={point.info} className='mt-10'>
            <Info />
          </section>
          <section className="mt-10">
            <Cerita />
          </section>
          <section id='galeri' ref={point.galeri} className='mt-20'>
            <Gallery />
          </section>
          <section className='mt-28'>
            <Hadiah />
          </section>
          <section className='text-slate-200 bg-black-rgba pb-16' id='comment' ref={point.komen}>
            <CommentsList />
          </section>
          <Footer />
        </main>
      </div>
    </div>
  )
}


export default App

