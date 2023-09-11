import React, { useEffect, useRef, useState } from 'react';
import "./SliderShow.scss"
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri"
import { connect } from 'react-redux';

import skeleton73 from "../../assets/images/7_3.png"

const SliderShow = ({ storeMovie }) => {
    const [sliderPres, setsliderPres] = useState(0)
    const ulElement = useRef()
    const handleOnClick = () => {
        if (sliderPres < storeMovie.movieShowing.length - 1) {
            setsliderPres(sliderPres + 1)
        }
        else {
            setsliderPres(0)
        }
    }
    const handleOnClickPre = () => {
        if (sliderPres > 0) {
            setsliderPres(sliderPres - 1)
        }
        else {
            setsliderPres(storeMovie.movieShowing.length - 1)
        }
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setsliderPres(sliderPres === (storeMovie.movieShowing.length - 1) ? 0 : sliderPres + 1);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [sliderPres]);

    console.log(">>>", storeMovie);

    return (
        <div className='slider-show'>
            {
                !storeMovie.movieShowing ?
                    <div className='wraper-slider relative'>
                        <ul className='relative mx-1'>
                            <li className=" skeleton73 absolute top-0 right-0 bottom-0 left-0 bg-slate-100"></li>
                            <li className="w-full basis-full shrink-0 grow-0 transition-transform duration-300 ease-in-out"><img className='object-cover bg-origin-padding w-full mx-auto' src={skeleton73} /></li>
                        </ul>
                    </div>
                    : <div className='wraper-slider relative'>
                        <ul className='flex overflow-hidden ' ref={ulElement}>
                            {storeMovie.movieShowing
                                .map((v, i) => <li style={{ transform: `translateX(-${sliderPres * ulElement.current?.offsetWidth}px)` }}
                                    key={i}
                                    className="w-full basis-full shrink-0 grow-0 transition-transform duration-300 ease-in-out" >
                                    <img className='object-cover bg-origin-padding w-full mx-auto' src={v.imageLandscapeMobile} /></li>)}
                        </ul>
                        <div className='absolute flex justify-center w-full bottom-2'>
                            {storeMovie.movieShowing.map((v, i) => <p onClick={() => setsliderPres(i)} style={{ backgroundColor: i === sliderPres ? "orange" : "whitesmoke" }} key={i} className={`${i === sliderPres ? "w-4 md:w-8" : " w-3 md:w-6"} h-2 cursor-pointer mx-2 rounded-md`}></p>)}
                        </div>
                        <button type="button" onClick={handleOnClickPre} className='py-3 arrow-direction hidden text-teal-100 top-1/3 text-5xl left-0 absolute'><RiArrowDropLeftLine className='btnArrow' /></button>
                        <button type="button" onClick={handleOnClick} className='py-3 arrow-direction hidden text-teal-100 top-1/3 text-5xl right-0 absolute'><RiArrowDropRightLine className='btnArrow' /></button>
                    </div>
            }
            {/* <BookingFast /> */}
        </div>
    );
}

const mapStateToProps = (state) => ({
    storeMovie: state.storeMovieManage
})

export default connect(mapStateToProps, undefined)(SliderShow)
