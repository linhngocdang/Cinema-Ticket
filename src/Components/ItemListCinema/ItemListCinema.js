import React from 'react';
import logo from "../../assets/images/logo-cinema-1.png"


const ItemListCinema = ({ valueCinema, onClick }) => {
    return (
        <div onClick={onClick} className='border-b-2 border-r-2 border-l-2 border-solid border-zinc-200 text-sm md:text-base'>
            <div className=' p-2 item-list-cinema flex items-center after: hover:bg-zinc-200'>
                <div className='w-20'>
                    <img src={logo} alt="logoImage" className='w-[70px] md:w-[80px]'/>
                </div>
                <p className='ml-3'>{valueCinema.name}</p>

            </div>
        </div>
    );
}

export default ItemListCinema;
