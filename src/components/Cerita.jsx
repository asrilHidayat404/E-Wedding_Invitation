import React from 'react'
import TimeLine from './TimeLine'

const Cerita = () => {
  return (
    <div>
        <header className='text-center px-9 flex flex-col items-center'>
            <span>How we meet!</span>
            <h1 className='text-primary info font-semibold'>Cerita Kami</h1>
            <p className='lg:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus adipisci iste iusto sit obcaecati esse repellendus ratione ipsa quod?`</p>
        </header>
        <div>
            <TimeLine />
        </div>
    </div>
  )
}

export default Cerita