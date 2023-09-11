import React from 'react';
import ItemComboChooseMobile from './ItemComboChooseMobile/ItemComboChooseMobile';

const BarBookingMobile = () => {
    return (
        <div className='xl:hidden'>
             <ul className='flex overflow-auto bg-zinc-200 pb-3 pt-3 px-5'>
                        <li className='flex-shrink-0'><ItemComboChooseMobile/></li>
                        <li className='flex-shrink-0'><ItemComboChooseMobile/></li>
                        <li className='flex-shrink-0'><ItemComboChooseMobile/></li>
                    </ul>
                <div className='flex justify-between items-center bg-white px-5'>
                    
                    <div>
                        <p><span className='font-semibold'>5 x </span>ghế:<span className='font-semibold'> D22, I15</span> </p>
                        <p className=''><span className=''>Tổng cộng :</span><span className='text-xl text-orange-500 font-semibold'> 574,000 đ</span></p>
                    </div>
                    <div>
                        <button className='text-white bg-orange-500 px-3 py-2 rounded-sm' type="button">Tiếp tục</button>
                    </div>
                </div>
        </div>
    );
}

export default BarBookingMobile;
