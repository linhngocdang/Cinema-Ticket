import React from 'react';

const CartPromotion = ({ dtPromotion }) => {
    return (
            <div className='cart-movie h-full h-full'>
                    <div className='wraper-cart-movie relative flex justify-center items-center h-full w-full '>
                        <img className='object-cover h-full rounded-md ' src={dtPromotion.imgPromotion} alt="promotionImage" />
                        <div className='hover-cart w-full h-full p-4 invisible rounded-sm absolute flex flex-col items-center justify-between'>
                            <div className='text-white'>
                                <h2 className='font-medium mb-4'>{dtPromotion.title}</h2>
                                <p className='hidden lg:block'>{dtPromotion.description}</p>
                            </div>
                            <button className='px-3 py-2 border-solid border border-white text-white font-medium hover:bg-orange-500' type="button">CHI TIẾT</button>
                        </div>
                    </div>
            </div>
    );
}

export default CartPromotion;
