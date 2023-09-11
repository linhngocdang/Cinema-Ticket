import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgCloseR} from 'react-icons/cg'
import './NavBar.scss'
const NavBar = () => {
    let [open, setopen] = useState(false)

    return (
        <nav className='navbar'>
            <div className="md:hidden absolute right-5 cursor-pointer z-20 top-8" onClick={() => setopen(!open)}>
            {
                !open ? <GiHamburgerMenu className='text-orange-500 text-2xl hover:text-orange-600'/> : <CgCloseR className='text-2xl text-orange-500 hover:text-orange-600'/>
            }
            </div>
            <ul className= {`justify-between xl:max-w-screen-xl xl:flex backdrop-blur-xl m-auto md:pl-10 pr-28 md:static absolute duration-500 ease-linear md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
                <li className='mx-5 md:text-white text-[#0c4da2] p-3 hover:scale-105 transition-colors text-lg md:text-xl font-bold tracking-widest'><NavLink to=''>TRANG CHỦ</NavLink></li>
                <li className='mx-5 md:text-white text-[#0c4da2] p-3 hover:scale-105 transition-colors text-lg md:text-xl font-bold tracking-widest'><NavLink to='mua-ve'>MUA VÉ</NavLink></li>
                <li className='mx-5 md:text-white text-[#0c4da2] p-3 hover:scale-105 transition-colors text-lg md:text-xl font-bold tracking-widest'><NavLink to='phim-dang-chieu'>PHIM</NavLink></li>
                <li className='mx-5 md:text-white text-[#0c4da2] p-3 hover:scale-105 transition-colors text-lg md:text-xl font-bold tracking-widest'><NavLink to='thanh-vien'>THÀNH VIÊN</NavLink></li>
            </ul>   
        </nav>
    );
}

export default NavBar;
