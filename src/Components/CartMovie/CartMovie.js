import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./CartMovie.scss"

const CartMovie = ({ dataMovie, isHome }) => {
    const nav = useNavigate()
    const { imageLandscape, imagePortrait, age, id, slug, name, subName } = dataMovie
    return (
        <div className='cart-movie mb-3 flex flex-col'>
            <div onClick={()=>nav(`/dat-ve/${slug}`,{state:{movieId:id}})}>
                <div className='wraper-cart-movie relative flex justify-center items-center'>
                    <div className='img-hover-zoom'>
                        <img className='object-cover w-full rounded-lg cursor-pointer' src={isHome ? imageLandscape : imagePortrait} alt="movieImage" />
                    </div>
                    <div className='hover-cart w-full h-full hidden invisible absolute md:flex flex-col items-center justify-center'>
                        <p className='w-10 mb-10'> {age > 0 ? <img className='object-cover w-full rounded-sm' src={`https://www.galaxycine.vn/website/images/ic-c${age}.png`} alt="moiveImage" /> : ""}</p>
                        <button className='px-3 py-2 border-solid border-orange-500 border rounded-sm text-white font-normal text-lg hover:bg-orange-500' type="button">Mua vé</button>
                    </div>
                </div>

                <div className='content my-2'>
                    <p className='moive-name truncate font-medium md:text-base text-sm uppercase'>{name}</p>
                    <p className='infor  truncate font-medium text-neutral-500 md:text-base text-sm'>{subName}</p>
                </div>
            </div>
        </div>
    );
}

export default CartMovie;
