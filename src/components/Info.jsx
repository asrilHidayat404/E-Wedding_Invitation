import Map from "./Map"
import Time from "./Time"

const Info = () => {
  return (
    <div className="w-full bg-black-rgba text-slate-200 py-24">
        <header className="text-center">
            <h1 className="info font-semibold text-primary">Informasi Acara</h1>
            <p>Alamat: Gedung Putih, Konglomengrat.</p>
            <p>Jl. Gunung Kidul, Kec. Bluto, Kab. Sumenep</p>
        </header>
        <div className="mt-5 flex flex-col items-center text-center">
            <button className="p-1 mb-4 rounded-md cursor-pointer bg-slate-200 text-primary">Buka Peta</button>
            <div className="lg:w-1/4 lg:h-[300px] relative w-[300px] h-[300px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d494.89747784345843!2d113.73707404325017!3d-7.105147748417734!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sbr!4v1723780805356!5m2!1sid!2sbr" className="w-full h-full" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <p className="lg:w-1/2 lg:p-0 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione perferendis itaque exercitationem facere debitis consequatur at tenetur nobis ab quasi ea, aperiam quae esse omnis dolorem assumenda magni quidem!</p>
        </div>
        <main>
            <div className="mt-6">
                <div className="waktu flex justify-center gap-10 lg:flex-row flex-col w-full items-center">
                    <Time jam={"08:00 - 11:00"} tanggal={"Minggu, 20 November 2023"} acara={"AKAD NIKAH"}/>
                    <Time jam={"05:00 - selesai"} tanggal={"Minggu, 20 November 2023"} acara={"RESEPSI"}/>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Info