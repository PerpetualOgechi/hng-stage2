import Link from 'next/link'
import React from 'react'

const CheckNav = () => {
    return (
        <div className=' justify-between bg-[#C05F3C] items-center pl-10 py-5 font-medium text-[23px] text-[#fff] navbar'>
            <div className=' flex justify-between md:w-[50%]'>
                <Link href={"cart"}>
                    <img src="" alt="" />
                    <span>Back  to cart</span>
                </Link>
                <img src="logo.svg" alt="" />
                <div></div>
            </div>

        </div>
    )
}

export default CheckNav