import React from 'react'
import Link from 'next/link'


const Cart = () => {
    const cartItems = [
        {
            img: "T-shirt.png",
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
            img: "T-shirt.png",
            name: "Designed by Feramo",
            title: "Men Tready Catual wear",
            description: "Explore defferent sizes and tasts of our buger"
        },

    ]

    const mayLike = [
        {
            img: "T-shirt.png",
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
            img: "T-shirt.png",
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

    ]

    return (
        <div className=" mt-20 bg-white font-bold  ">
            <div className=" text-[20px] flex flex-col items-center gap-4 justify-center font-medium  text-[#fff] bg-black py-5  md:text-[20px]">
                <h2>Exclusive Men  COLLections </h2>
                <div className='bg-white h-1 w-[40%]'></div>
            </div>
            <div className='md:px-10'>
                <div className='bg-[#F4F2F2] '>
                    <div className='flex justify-between w-[50%] pl-10 py-5 border-b'>
                        <div>
                            <h1>Cart Sumary</h1>
                        </div>
                        <div className='flex gap-5 '>
                            <div>
                                <h1 className='bg-[#ff7f50] rounded-full px-2'>3</h1>
                            </div>
                            <div>
                                <h1>Items Selected</h1>
                                <div className='flex gap-5'>
                                    <h2>Subtotal:</h2>
                                    <p>$200:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className=" px-10 "
                    >
                        {
                            cartItems.map(category => (
                                <div href={"/"} className=" flex flex-col p-5 font-bold border-b rounded md:flex-row">
                                    <div className="w-[250px] ">
                                        <img src={category.img} alt="" className="w-full " />
                                    </div>
                                    <div className='flex justify-center pt-3'>
                                        <div className='h-[2px] bg-[#818181] w-[50%]'></div>
                                    </div>

                                    <div className="pl-5 py-3 flex flex-col gap-2 ">
                                        <h2 className="text-[12px] font-light">{category.name}</h2>
                                        <h2 className="text-[14px] font-bold">{category.title}</h2>
                                        <div className='flex flex-col text-[12px] gap-[2px] justify-between'>
                                            <h1>Variations:</h1>
                                            <div>

                                                <button className='border border-[#a8a8a8] py-0 px-2 font-medium'>XXL</button>
                                            </div>
                                        </div>

                                        <div className='flex'>
                                            <div className='flex gap-2 w-[50%]'>
                                                <p>4.5</p>

                                                <div className='flex'>
                                                    <img src="star.svg" alt="" />
                                                    <img src="star.svg" alt="" />
                                                    <img src="star.svg" alt="" />
                                                    <img src="star.svg" alt="" />
                                                    <img src="subtract.svg" alt="" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex  flex-col gap-5 w-full justify-between'>
                                            <div className='flex justify-end'>
                                                <h1 className='font-bold text-[16px] mt-[5px]'>Price: <span>$ 50</span></h1>
                                            </div>
                                            <div className='flex  gap-20'>
                                                <div className='flex justify-end'>
                                                    <button className='border-2 px-3 rounded-full'>Delete</button>
                                                </div>

                                                <div className='flex gap-5'>
                                                    <button className='bg-[#ff7f50] rounded px-2'>-</button>
                                                    <h1>2</h1>
                                                    <button className='bg-[#ff7f50] rounded px-2'>+</button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-center py-5'>
                        <Link href={"checkout"} className='bg-[#ff7f50] px-10 py-3 rounded-full md:px-64 '>Proceed  to checkout</Link>
                    </div>
                </div>

            </div>

            <div className='pt-10'>
                <h1 className='px-20 font-bold'>You may also like </h1>
                <div
                    className="mt-10 px-10 py-10 border-b-2 border-[#949393]"
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(auto-fit,minmax(260px,1fr))`,
                        gridGap: "20px",
                        marginTop: "20px",

                    }}>
                    {
                        mayLike.map(category => (
                            <Link href={"/"} className=" border text-[12px] font-bold rounded bg-[#fff] text-[#000000] p-3 ">
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
                                        <div>
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
                                                <img src="star.svg" alt="" />
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
                                        <div className=''>
                                            <button className='font-bold bg-[#ff7f50] w-full rounded-full py-3  px-10'>Add to  cart</button>
                                            <p className='text-[10px]  font-light'>30 days money back guarantee</p>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>




        </div>
    )
}

export default Cart