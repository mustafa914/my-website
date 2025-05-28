import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


const Navbar = () => {
    return (
        <div>
            <nav className='w-full fixed px-5'>
                <a href="">
                    <Image src={assets.logo} alt='A picture of the logo' className='w-28
                    cursor-pointer mr-14'   />
                </a>

                <ul>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#exp">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
