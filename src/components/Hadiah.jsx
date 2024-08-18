import React from 'react'
import CommentsList from "./CommentList"
const Hadiah = () => {
  return (
    <div className='w-full text-slate-200 py-10 bg-black-rgba lg:py-20 p-6'>
        <header className='text-center mb-4 flex flex-col gap-2'>
          <span className='lg:text-base text-sm'>Lorem ipsum dolor sit amet.</span>
          <h1 className='lg:text-5xl text-4xl gift text-primary font-bold'>Kirim Hadiah</h1>
          <p className='lg:text-base text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, esse culpa dolorum labore inventore earum!</p>
        </header>
        <div className='hadiah w-full flex justify-center'>
          <ul className='flex gap-10 text-center border p-7 border-primary lg:flex-row flex-col'>
            <li className=' bg-slate-200 font-semibold text-black py-1 rounded-sm px-10 border border-slate-200'>
              <div>BCA</div>
              <div>1334567</div>
            </li>
            <li className=' bg-slate-200 font-semibold text-black py-1 rounded-sm px-10 border border-slate-200'>
              <div>MANDIRI</div>
              <div>2482467260248</div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Hadiah