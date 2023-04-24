import React from 'react'

import heroImage from '../assets/heroImage.jpg'

const HeroContent = () => {
    return (
        <div className='hero-content'>
            <div className='hero-text'>
                <h1>Leinny jimenez</h1>
                <p>Junior React Developer</p>
            </div>
            <img src={heroImage} alt='hero' className='hero-img' />
        </div>
    )
}

export default HeroContent