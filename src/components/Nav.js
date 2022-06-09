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
            <Link to='/product/favorites'>
                <button className="show-favorites-btn">Favorites</button>
            </Link>
        </div>
    )
}

export default Nav