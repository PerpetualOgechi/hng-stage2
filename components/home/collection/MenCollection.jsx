import React from 'react'
import Link from 'next/link'


const MenCollection = () => {
    const categories = [
        {
            img: "short.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "hoody.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "T-shirt.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "caggo-pant.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "army-green.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "tootle-neck.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "jacket.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "office-shirt.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "shirt.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "partern-shirt.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "kimono.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },
        {
            img: "long-sleeve.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        }
    ]

    return (
        <div className="bg-white">
            <div className=" text-[20px] flex flex-col items-center gap-4 justify-center font-medium  text-[#fff] bg-black py-5  md:text-[30px]">
                <h2>Exclusive Men  COLLections </h2>
                <div className='bg-white h-1 w-[40%]'></div>
            </div>
            <div
                className="mt-10 px-10 py-10 border-b-2 border-[#3d3d3d]"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(auto-fit,minmax(260px,1fr))`,
                    gridGap: "20px",
                    marginTop: "20px",

                }}>
                {
                    categories.map((category, index) => (
                        <Link href={"/"} key={index} className=" border text-[12px] font-bold rounded bg-[#fff] text-[#000000] p-3 ">
                            <div className="w-full ">
                                <img src={category.img} alt="" className="w-full " />
                            </div>
                            <div className='flex justify-center pt-3'>
                                <div className='h-[2px] bg-[#818181] w-[50%]'></div>
                            </div>
                            <div className='flex justify-end'>
                                <img src="heart.svg" alt="" />
                            </div>
                            <div className="pl-5 py-3 flex flex-col gap-2 ">
                                <h2 className="text-[12px] font-light">{category.name}</h2>
                                <h2 className="text-[14px] font-bold">{category.title}</h2>
                                <div className='flex text-[12px] gap-[2px] justify-between'>
                                    <h1>Variations:</h1>
                                    <div className='flex gap-1'>
                                        <button className='border border-[#a8a8a8] py-0 px-2 font-medium'>S</button>
                                        <button className='border border-[#a8a8a8] py-0 px-2 font-medium'>M</button>
                                        <button className='border border-[#a8a8a8] py-0 px-2 font-medium'>L</button>
                                        <button className='border border-[#a8a8a8] py-0 px-2 font-medium'>XL</button>
                                        <button className='border border-[#a8a8a8] py-0 px-2 font-medium'>XXL</button>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='flex gap-2 w-[50%]'>
                                        <p>4.5</p>

                                        <div className='flex'>
                                            <img src="star2.png" alt="" />
                                            <img src="star.svg" alt="" />
                                            <img src="star.svg" alt="" />
                                            <img src="star.svg" alt="" />
                                            <img src="subtract.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className='w-[50%] flex justify-center'>
                                        <p className='underline'>200 Ratings</p>
                                    </div>
                                </div>
                                <div className='flex w-full justify-between'>
                                    <h1 className='font-bold text-[16px] mt-[5px]'>$50</h1>
                                    <div className='flex flex-col gap-1'>
                                        <Link href={"cart"} className='font-bold bg-[#ff7f50] w-full rounded-full py-3  px-10'>Add to  cart</Link>
                                        <p className='text-[10px]  font-light'>30 days money back guarantee</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className=' py-10 flex justify-center gap-5'>
                <button className='bg-[#ff7f50] rounded px-2'>1</button>
                <button className='bg-[#ff7f50] rounded px-2'>2</button>
                <button className='bg-[#ff7f50] rounded px-2'>
                    <img src="Arrow.svg" alt="" className='w-[10px]' />
                </button>
            </div>


        </div>
    )
}

export default MenCollection