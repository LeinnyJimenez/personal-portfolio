import React from 'react'
import HeroContent from '../components/HeroContent'
import Navbar from '../components/Navbar'

const Hero = () => {
    return (
        <div className='page' id='home'>
            <Navbar />
            <HeroContent />
        </div>
    )
}

export default Hero