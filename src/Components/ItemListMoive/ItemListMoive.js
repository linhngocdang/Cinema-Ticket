import React from 'react';
import "./ItemListMoive.scss"

const ItemListMoive = ({ value, onClick }) => {

    const { imageLandscape, name, subName, age } = value;
    return (
        <div className='item-list-movie '>
            <div onClick={onClick} className='border-b-2 border-r-2 border-l-2 border-solid border-zinc-200 after: hover:bg-zinc-200 cursor-pointer text-sm md:text-base'>
                <div className='grid grid-cols-10 mx-4 h-30 py-5 content-center '>
                    <div className='grid grid-cols-4 col-span-9 '>
                        <div className='mr-2'>
                            <img className='rounded-md w-[60px] h-[40px]' src={imageLandscape} alt="movieImage" />
                        </div>
                        <div className='col-span-3 mr-2'>
                            <p className='text-sm'>{name}</p>
                            <p className='text-sm text-slate-500'>{subName}</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='w-7 mb-3'> {age > 0 ? <img className='' src={`https://www.galaxycine.vn/website/images/ic-c${value.age}.png`} alt="moiveImage" /> : ""}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemListMoive;
