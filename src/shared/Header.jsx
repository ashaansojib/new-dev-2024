import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='px-2 py-4 clear-fix h-[120px]'>
            <h2 className='text-3xl font-bold italic'>AshaAn Sojib .</h2>
            <nav>
                <ul className='menus'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/">Services</NavLink>
                    <NavLink to="/">Contact</NavLink>
            <button className='my-btn'>Hire Me</button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;