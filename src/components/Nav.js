import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {

    return (
        <div className='nav-container'>
            <Link to='/'>
                <button className='home-btn'>Home</button>
            </Link>
            <h1>Artistry of Makeup</h1>
            <button>Favorites</button>
        </div>
    )
}

export default Nav