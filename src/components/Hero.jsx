import Countdown from "../utils/Countdown"

const Hero = () => {
    
    return (
        <div className='flex items-center justify-center h-full flex-col text-slate-200'>
            <div className="hero names">
                <h4 className="lg:text-7xl text-5xl">Asril & ?????</h4>
            </div>
            <div className="time flex flex-col items-center mt-8">
                <span>Akan segera melangsungkan pernikahan dalam:</span>
                <Countdown deadline={"December, 09, 2024"} specificHour={8} />
            </div>
        </div>
    )
}

export default Hero