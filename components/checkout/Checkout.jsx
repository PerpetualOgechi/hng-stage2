import Link from 'next/link'
import React from 'react'

const Checkout = () => {
    return (
        <div className='pt-t0  bg-[#F4F2F2] pb-5 px-10'>
            <div className='px-10 py-5'>
                <h1>Checkout</h1>
            </div>
            <form className='  w-full flex flex-col gap-5 md:flex-row '>
                <div className='flex flex-col gap-3 w-full'>
                    <div className='bg-white shadow-md px-10 py-5'>
                        <h1 className='font-bold '>Billing information</h1>
                        <p>Please provide accurate billing address to<br /> help us save you better.</p>
                        <div className='flex flex-col gap-5'>
                            <label htmlFor="" className='flex flex-col'>
                                State:
                                <div className='w-full border p-5'>
                                    <select className='w-full'>
                                        <option value="Lagos">Lagos</option>
                                    </select>
                                </div>
                            </label>
                            <label htmlFor="" className='flex flex-col'>
                                Full Address
                                <div className='w-full border p-5'>
                                    <select className='w-full'>
                                        <option value="NO 12 Amadu bellow way idumota">NO 12 Amadu bellow way idumota</option>
                                    </select>
                                </div>
                            </label>
                            <label htmlFor="" className='flex flex-col'>
                                Select Pickup Station
                                <div className='w-full border p-5'>
                                    <select className='w-full'>
                                        <option value="Unilag Bus Taminus">Unilag Bus Taminus</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='bg-white shadow-md px-10 py-5 font-bold'>
                        <div className='flex ga-10'>
                            <h1 className='font-bold '>Payment method</h1>
                            <p>Secure connection</p>
                        </div>
                        <div>
                            <div className='flex gap-5  items-center font-bold'>
                                <div className='flex items-center gap-2'>
                                    <img src="mastercard.svg" alt="" />
                                    <h1>Master Card</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src="visa.svg" alt="" />
                                    <h1>Verve</h1>
                                </div>
                                <div>
                                    <img src="visa-logo.svg" alt="" />

                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col gap-5'>
                            <label htmlFor="" className='flex flex-col'>
                                Name on card
                                <input type="text" className='w-full border py-3 p-5' placeholder='Ogechi Ukwueze' />
                            </label>
                            <label htmlFor="" className='flex flex-col'>
                                Card Number
                                <input type="text" className='w-full border py-3 p-5' placeholder='4232 4211 6731 0027' />
                            </label>
                            <div className='flex justify-between gap-10'>


                                <label htmlFor="" className='flex flex-col w-[50%]'>
                                    Expiry Date
                                    <input type="date" className='w-full border py-3 p-5 ' />
                                </label>

                                <label htmlFor="" className='flex flex-col w-[50%]'>
                                    CVV
                                    <input className='w-full border py-3 p-5 ' placeholder='034' />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-md px-10 py-5 font-bold flex flex-col items-center gap-5 md:flex-row justify-between'>
                        <div className='flex gap-5 items-center'>
                            <img src="apple.svg" alt="" />
                            <h1> Pay</h1>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <img src="dollar-circle.svg" alt="" />
                            <h1> Cash On Delivery</h1>
                        </div>
                        <div>

                            <h1> Other Payment Method</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full font-bold md:w-[30%]'>
                    <div className='bg-white p-5'>
                        <h1 className='border-b py-3 px-5'>Oder Sumary</h1>
                        <h1 className='border-b flex justify-between py-3 px-5'>
                            <span>Selected Item (3)</span>
                            <span>$50</span>
                        </h1>
                        <h1 className='border-b flex justify-between py-3 px-5'>
                            <span>Sum Total</span>
                            <span>5099</span>
                        </h1>
                        <div className='py-3 flex justify-center'>
                            <Link href={"payment"} className='px-10 bg-[#ff7f50] rounded-full py-2'>Complete checkout</Link>
                        </div>
                    </div>
                    <p className='text-[10px] pt-2 font-light'>By accepting you agree to our <span className='font-bold'>TERMS and CONDITIONS</span></p>
                </div>
            </form>
        </div>
    )
}

export default Checkout