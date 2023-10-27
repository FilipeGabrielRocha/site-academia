import React from 'react'

import './Header.css'

import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={Logo} alt="" />

            <ul className='header-menu'>
                <li>Home</li>
                <li>Programas</li>
                <li>Por que nós</li>
                <li>Planos</li>
                <li>Depoimentos</li>
            </ul>
        </div>
    )
}

export default Header