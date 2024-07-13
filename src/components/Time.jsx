const Time = ({acara, jam, tanggal}) => {
    return (
        <div className="border bg-primary border-white lg:w-1/3 rounded-md text-center w-2/3">
            <header className="border-b-2 font-semibold p-1">{acara}</header>
            <div className="time flex justify-around p-4 border-b-2 lg:flex-row flex-col gap-4 lg:gap-0">
                <div className="jam flex flex-col items-center">
                    <span>
                        <svg className="w-4 h-4 text-slate-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span>{jam}</span>
                </div>
                <div className="tanggal flex flex-col items-center">
                    <span>
                        <svg className="w-4 h-4 text-slate-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <span>{tanggal}</span>
                </div>
            </div>
            <footer className="p-2 text-sm">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus consequuntur et obcaecati reiciendis similique ullam!</p>
            </footer>
        </div>
    )
}

export default Time