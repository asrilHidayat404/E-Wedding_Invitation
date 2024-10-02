import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Gallery = () => {
    const randomImages = [];
    const [imgOn, setImgOn] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [i , setI] = useState()
    const showImage = (data) => {
        data.preventDefault()
        setImgOn((prev) => !prev)
        setImgUrl(data.target.src)
    }
    useEffect(() => {
        for (let i = 0; i < 20; i++) {
            setI(Math.random())
        }
    }, [imgUrl])
    for (let i = 0; i < 20; i++) {
        randomImages.push(
            <img
                id={i}
                key={i}
                src={`https://picsum.photos/1200/700?random=${i}`}
                alt=""
                className="lg:w-1/5 md:w-1/4 w-1/3 rounded-md cursor-pointer"
                onClick={(e) => showImage(e)}
            />
        );
    }
    return (
        <div className='w-full mx-auto lg:p-0 p-3'>
            <header className='text-center mb-4'>
                <span>Memori Kisah Kami</span>
                <h1 className="gallery-head font-semibold text-primary">Galeri Foto</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, distinctio.</span>
            </header>
            <div className="photos w-full flex flex-wrap lg:gap-10 gap-5 justify-center p-0">
                {
                    randomImages
                }
            </div>
            <div className={`fixed flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-nav-black-rgba ${imgOn ? "flex" : "hidden"}`}>
                <div className='max-w-[90%] max-h-[90%] lg:max-w-[70%] lg:max-h-[70%] relative flex justify-center items-center'>
                    <span className="absolute lg:-top-8 md:-top-5 -top-4 text-2xl -right-4 w-[30px] h-[30px] p-0 rounded-full flex justify-center font-bold uppercase items-center text-primary bg-slate-200 cursor-pointer" onClick={() => setImgOn(!imgOn)}>x</span>
                    <img src={imgUrl} alt="" className=' border-primary border-2 lg:w-[800px]'/>
                </div>
            </div>
        </div>

    )
}

export default Gallery
