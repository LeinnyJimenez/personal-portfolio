import React from 'react'
import { links } from '../data'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h3>logo</h3>
            <div className='links'>
                {
                    links.map(i => {
                        const { link, to, id } = i

                        return (
                            <a href={`#${to}`} key={id}>{link}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar