import Link from 'next/link'
import React from 'react'

const Success = () => {
    return (
        <div className='p-10 bg-white h-[100vh]'>

            <div>
                <div>
                    <img src="" alt="" />
                    <Link href={"checkout"}>payment</Link>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src="good.svg" alt="" />
                <p>Successful</p>

            </div>

        </div>
    )
}

export default Success