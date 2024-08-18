import React from 'react'

const TimeLine = () => {
    return (
        <div className="p-4">
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid pl-10 lg:pl-0">
                    <div className="flex md:contents flex-row-reverse">
                        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 className=" font-semibold lg:text-xl">Awal Kenal</h3>
                            <span className="text-sm text-primary -top-5 left-2 whitespace-nowrap">20 Maret 2023</span>
                            <p className="mt-2 leading-6 text-justify lg:max-w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum corporis inventore ullam similique dolorem doloremque, iste vitae, repudiandae veniam soluta ex autem natus culpa tenetur tempora necessitatibus cupiditate amet!</p>
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-primary rounded-t-full">
                                </div>
                            </div>
                            <div className="absolute lg:w-32 tml lg:h-32 w-16 h-16 lg:-mt-12 -mt-8 -ml-5 lg:-ml-[50px] bg-white border-4 border-primary rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-primary"></div>
                            </div>
                            <div className="absolute lg:w-32 tml lg:h-32 w-16 h-16 lg:-mt-12 -mt-8 -ml-5 lg:-ml-[50px] bg-white border-4 border-primary rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 className=" font-semibold lg:text-xl">Mulai Serius</h3>
                            <span className="text-sm text-primary -top-5 left-2 whitespace-nowrap">12 Juli 2026</span>
                            <p className="mt-2 leading-6 text-justify lg:max-w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure voluptate praesentium accusantium reiciendis, molestias alias debitis nisi libero a?</p>
                        </div>
                    </div>

                    <div className="flex md:contents flex-row-reverse">
                        <div
                            className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 className=" font-semibold lg:text-xl">Tunangan</h3>
                            <span className="text-sm text-primary -top-5 left-2 whitespace-nowrap">12 Juli 2027</span>
                            <p className="mt-2 leading-6 text-justify lg:max-w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum corporis inventore ullam similique dolorem doloremque, iste vitae, repudiandae veniam soluta ex autem natus culpa tenetur tempora necessitatibus cupiditate amet!</p>
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-primary rounded-t-full">
                                </div>
                            </div>
                            <div className="absolute lg:w-32 tml lg:h-32 w-16 h-16 lg:-mt-12 -mt-8 -ml-5 lg:-ml-[50px] bg-white border-4 border-primary rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-primary"></div>
                            </div>
                            <div className="absolute lg:w-32 tml lg:h-32 w-16 h-16 lg:-mt-12 -mt-8 -ml-5 lg:-ml-[50px] bg-white border-4 border-primary rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 className=" font-semibold lg:text-xl">New Event 4</h3>
                            <p className="mt-2 leading-6 text-justify lg:max-w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure voluptate praesentium accusantium reiciendis, molestias alias debitis nisi libero a?</p>
                            <span className="absolute text-sm text-primary -top-5 left-2 whitespace-nowrap">Date 4</span>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default TimeLine