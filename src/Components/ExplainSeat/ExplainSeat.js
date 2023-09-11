import React from 'react';

const ExplainSeat = () => {
    return (
        <ul className='explain-seat flex flex-wrap justify-evenly mt-8 md:text-base text-sm'>
                <li className='flex items-center my-3'>
                    <p className='w-6 h-6 border-solid border-2 border-zinc-500 rounded-md mr-2'></p>
                    <span>Ghế thường</span>
                </li>
                <li className='flex items-center my-3'>
                    <p className='w-6 h-6 border-solid border-2 border-blue-700 rounded-md mr-2'></p>
                    <span>Ghế đôi</span>
                </li>
                <li className='flex items-center my-3'>
                    <p className='w-6 h-6 border-solid border-2 border-orange-600 rounded-md mr-2'></p>
                    <span>Ghế VIP</span>
                </li>
                <li className='flex items-center my-3'>
                    <p className='w-6 h-6 bg-zinc-400 rounded-md mr-2'></p>
                    <span>Ghế VIP</span>
                </li>
                <li className='flex items-center my-3'>
                    <p className='w-6 h-6 bg-orange-600 rounded-md mr-2'></p>
                    <span>Ghế VIP</span>
                </li>
            </ul>
      
    );
}

export default ExplainSeat;
