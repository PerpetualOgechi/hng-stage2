import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#ff7f50] text-[#fff]'>
            <div className='px-10 py-10'>
                <div>
                    <img src="logo.svg" alt="" className='w-[100px]' />
                </div>
                <div className='flex justify-between py-10'>
                    <div className='flex flex-col gap-5'>
                        <p>Lagos Ikeja </p>
                        <p>Lapis Store Internation</p>
                        <p>Nigeria.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p>About The Club</p>
                        <p>Contact Us</p>
                        <p>More</p>
                        <p>Frequently Asked Questions</p>
                    </div>
                    <div className='hidden md:flex flex-col gap-5 pr-20'>
                        <div className='flex items-center gap-5'>
                            <img src="facebook.svg" width={30} alt="" />
                            <p>Facebook</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src="instagram.svg" width={30} alt="" />
                            <p>Instagram</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src="twitter.svg" width={30} alt="" />
                            <p>Twitter</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src="youtube.svg" width={30} alt="" />
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-[#838282] flex flex-col items-center px-5 justify-center py-5'>
                <div className='flex gap-5 pr-20 md:hidden'>
                    <div className='flex items-center gap-5'>
                        <img src="facebook.svg" width={30} alt="" />

                    </div>
                    <div className='flex items-center gap-5'>
                        <img src="instagram.svg" width={30} alt="" />

                    </div>
                    <div className='flex items-center gap-5'>
                        <img src="twitter.svg" width={30} alt="" />

                    </div>
                    <div className='flex items-center gap-5'>
                        <img src="youtube.svg" width={30} alt="" />

                    </div>
                </div>
                <p>Copy Right Lapis Store International. All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer