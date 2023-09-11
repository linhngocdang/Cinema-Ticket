import React, { useState } from 'react';
import "./Header.scss"
import logo from "../../assets/images/galaxy-logo.png"
import logoMobile from "../../assets/images/galaxy-logo-mobile.png"
import UserLogin from './UserLogin/UserLogin';
import { Link } from 'react-router-dom';
const Header = (props) => {

    return (
        <div className='header bg-slate-100  '>
            <div className='xl:max-w-screen-xl flex justify-between items-center py-4 mx-auto'>
                <Link to="/" >
                    <picture>
                        <source media='(max-width: 768px)' srcSet={logoMobile} />
                        <source media='(min-width: 768px)' srcSet={logo} />
                        <img className='md:w-80 w-[100px] mx-4' src={logo} alt='logo' />
                    </picture>
                </Link>
                {/* <Search/> */}
                <UserLogin />
            </div>

        </div>
    );
}

export default Header;

