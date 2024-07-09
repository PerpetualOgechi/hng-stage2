import Checkout from '@/components/checkout/Checkout'
import CheckNav from '@/components/navbar/CheckNav'
import React from 'react'

const page = () => {
    return (
        <div>
            <CheckNav />
            <Checkout />
        </div>
    )
}

export default page