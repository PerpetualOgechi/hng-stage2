import React from 'react'

const Hero = () => {
    return (
        <div className='pt-20 mx-auto '

        >
            <div className=' flex justify-between'>

                <div className='  w-full h-[400px] bg-cover bg-no-repeat bg-left' style={{
                    backgroundImage: `url("polygon.png")`,
                }} >


                    <div className='flex mx-auto pt-8 px-8 gap-10 my-5 w-full'>
                        <div className='flex bg-white rounded-md items-center gap-5  px-5'>
                            <img src="search.svg" alt="" width={30} />
                            <input type="text" placeholder='Search Lapis' className='h-full' />
                        </div>
                        <div>
                            <button className='py-3 px-8 bg-white text-black rounded-md'>Search</button>
                        </div>
                    </div>
                    <div className='pl-8'>
                        <h1 className='text-[55px] text-[#fff] font-medium'>FIND YOUR  <br />TRUE  STYLE <br /> HERE</h1>
                        {/* <h1 className='max-w-[450px] text-[55px] text-[#fff] font-medium'>FIND YOUR  TRUE  STYLE HERE</h1> */}
                    </div>
                </div>
            </div>
        </div>
        // </div >
    )
}

export default Hero