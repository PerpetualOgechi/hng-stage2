import Link from 'next/link'
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className=' justify-between bg-[#C05F3C] items-center px-10 py-5 font-medium text-[23px] text-[#fff] navbar'>
            <div className='flex items-center justify-between'>
                <div className='flex  gap-5 items-center  '>
                    <img src="logo.svg" alt="" className='w-[100px]' />

                </div>
                <div className='flex gap-10'>
                    <div className='flex gap-10 items-center'>
                        {/* <Link href="/">Home</Link> */}
                        <Link href={"/"} className='text-[#000] '>Shop</Link>

                    </div>
                    <div className='flex'>
                        <div className='px-10'>
                            <Link href={"cart"} className="">
                                <div className=" flex  gap-3">
                                    <img src="shopping-cart.svg" alt="" className="w-[100%]" />
                                    <div className='relative'>
                                        <h1>Cart</h1>
                                        <p className="bg-[#fff] text-[#000] rounded-full absolute py-0 px-2 text-[16px] text-center top-[-14px] left-[-5px]">{"1"}</p>
                                    </div>
                                </div>

                            </Link>

                        </div>
                        <div className='px-10  border-l-2  border-white'>
                            <Link href={""}>
                                <div className='w-[40px] '>
                                    <img src="person.svg" alt="" className='w-[50px]' />
                                    {/* <h1>hello</h1> */}
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar