

const Hero = () => {
    
    return (
        <div className='flex items-center justify-center h-full flex-col text-slate-200'>
            <div className="hero names">
                <h4 className="lg:text-7xl text-5xl">Zilong & Miya</h4>
            </div>
            <div className="time flex flex-col items-center mt-8">
                <span>Akan segera melangsungkan pernikahan dalam</span>
                <div className="mt-5 flex gap-3">
                    <div className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-slate-200 flex justify-center items-center text-[rgb(48,76,171)]">
                        <p>177</p>
                        <p>hari</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-slate-200 flex justify-center items-center text-[rgb(48,76,171)]">
                        <p>14</p>
                        <p>jam</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-slate-200 flex justify-center items-center text-[rgb(48,76,171)]">
                        <p>25</p>
                        <p>menit</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-slate-200 flex justify-center items-center text-[rgb(48,76,171)]">
                        <p>10</p>
                        <p>detik</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero