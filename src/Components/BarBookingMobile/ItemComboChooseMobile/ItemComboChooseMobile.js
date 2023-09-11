import React from 'react';
import { IoClose } from "react-icons/io5";
const ItemComboChooseMobile = () => {
    return (
        <div className='bg-white inline-block rounded-sm mr-2'>
            <div className='flex items-center'>
                <div className='flex items-center'> 
                    <div className="lg:w-20 md:h-16 h-12">
                        <img className='object-cover h-full' src="https://www.galaxycine.vn/media/2023/3/31/menuboard-combo1-2-2022-coonline-combo1_1680280126585.jpg" alt=""/>
                    </div>
                    <div className='w-20 lg:w-32 pl-2'>
                        <p className='text-sm truncate'><span>1 x </span>ICombo bắp nước</p>
                        <p className='truncate'>ICombo bắp nước</p>
                    </div>
                </div>
                <div className='p-2'>
                    <button style={{borderRadius:"50%", fontSize:"16px"}} type="button" className='text-sm w-5 h-5 flex justify-center items-center bg-slate-400 text-white'><IoClose/></button>
                </div>
            </div>
        </div>
    );
}

export default ItemComboChooseMobile;
