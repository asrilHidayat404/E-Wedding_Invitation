// import Man from "../assets/man.jpeg"
// import Woman from "../assets/Woman.jpeg"

const Mempelai = () => {
    return (
        <div className="w-full flex flex-col items-center bg-slate-200 pt-20 lg:h-screen">
            <header className="text-center">
                <h1 className="mb-6 salam text-primary font-semibold">Assalamualaikum Wr. Wb.</h1>
                <p>Dengan Rahmat Allah yang maha kuasa</p>
                <p>Insyaallah kami akan melangsungkan pernikahan</p>
            </header>
            <div className="text-center mt-3">
                <p>Minggu, 24 Juli 2024</p>
                <p>di Aula Masjid - Jalan Semeru - RT 004</p>
            </div>
            <div className="couple flex gap-3 mt-10 lg:flex-row flex-col relative w-full justify-center p-10 lg:p-0">
                <div className="man flex gap-5 justify-center ">
                    <div className="lg:w-[250px] w-[400px] text-right lg:flex-none flex-1">
                        <div className="man-name text-primary mb-5 font-semibold">Asril</div>
                        <p className="lg:text-inherit text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempore harum sequi nesciunt animi temporibus, alias eligendi blanditiis sunt unde!</p>
                    </div>
                    <div className="lg:flex-none flex-1 flex items-center">
                        <img src={`https://64.media.tumblr.com/2ccceb6b12cda467efce1101c5b2c4f9/7083d6d18689c4b4-bc/s400x600/0d2d401c9e5b359456e77ddb500b8445c8f4d83d.jpg`} alt="" className="rounded-full lg:max-w-[140px] w-[240px]" />
                    </div>
                </div>
                <div className="lg:inline flex justify-center items-center lg:absolute lg:top-16 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
                    <div className="bg-slate-200 p-5 rounded-full">
                        <svg className="w-6 h-auto fill-current text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                        </svg>
                    </div>
                </div>
                <div className="woman flex flex-row-reverse gap-5 justify-center">
                    <div className="lg:w-[250px] w-[400px] text-left lg:flex-none flex-1">
                        <div className="woman-name text-primary mb-5 font-semibold">?????</div>
                        <p className="lg:text-inherit text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolore voluptatum natus repellendus eligendi at vel suscipit molestiae error temporibus!.</p>
                    </div>
                    <div className="lg:flex-none flex-1 flex items-center justify-end">
                        <img src={`https://nekorandom.files.wordpress.com/2021/07/spiderman-1-mary-jane-watson-high-school-field-trip-kirsten_dunst.jpg`} alt="" className="rounded-full lg:max-w-[140px] w-[240px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mempelai