"use client"
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { Ring } from 'react-css-spinners';
import Link from 'next/link';


const Payment = () => {
    const router = useRouter();
    const [isLoading, setsLoading] = useState(true)
    setTimeout(function () {
        setsLoading(false)
        router.replace("/success");
    }, 1000);
    return (
        <div className='p-10 bg-white h-[100vh]'>

            <div>
                <div>
                    <img src="" alt="" />
                    <Link href={"checkout"}>payment</Link>
                </div>
            </div>
            <div className='flex flex-col gap-10 items-center justify-center'>
                <p>processing</p>
                {
                    isLoading ?
                        <Ring size={100} color={"#ff7f50"} borderWidth={5} /> :
                        ""

                }
            </div>

        </div>
    )
}

export default Payment