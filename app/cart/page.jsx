import Cart from '@/components/cart/Cart'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <Cart />
            <Footer />
        </div>
    )
}

export default page