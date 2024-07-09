import Countdown from "../utils/Countdown"

const Hero = () => {
    
    return (
        <div className='flex items-center justify-center h-full flex-col text-slate-200'>
            <div className="hero names">
                <h4 className="lg:text-7xl text-5xl">Zilong & Miya</h4>
            </div>
            <div className="time flex flex-col items-center mt-8">
                <span>Akan segera melangsungkan pernikahan dalam:</span>
                <Countdown deadline={"Juli, 12, 2024"}/>
            </div>
        </div>
    )
}

export default Hero