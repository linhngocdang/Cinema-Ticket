import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import CartMovie from '../CartMovie/CartMovie';
import { useState } from 'react';
import { useEffect } from 'react';
import './AreaShowMovie.scss';
import skeleton23 from "../../assets/images/2_3.png"

const AreaShowMoive = ({ dataSoonAndNowMoive, actionGetDataSoonAndNowMoive }) => {
  const location =useLocation();
  console.log(">>>>>>>>>>>>",location);

  useEffect(() => {
    if (!dataSoonAndNowMoive.movieCommingSoon) {
      actionGetDataSoonAndNowMoive()
    }
  }, [])

  const [isMovie, setisMovie] = useState(()=>{
    if(location.pathname=="/phim-sap-chieu"){return 1}
    else {return 0}
  })

  return (
    <div className='area-show-movie'>
      <div className='xl:max-w-7xl md:mx-auto mx-5'>
        <div className="type-moive md:text-xl text-base mt-5 mb-10">
          <NavLink to="/phim-dang-chieu" onClick={() => setisMovie(0)} className={({ isActive }) => isActive ? "border-b-4 border-solid border-orange-500 font-medium inline-block mr-5" : "font-medium inline-block mr-5"}>
            PHIM ĐANG CHIẾU
          </NavLink>
          <NavLink to="/phim-sap-chieu" onClick={() => setisMovie(1)} className={({ isActive }) => isActive ? "border-b-4 border-solid border-orange-500 font-medium inline-block" : "font-medium inline-block"}>
            PHIM SẮP CHIẾU
          </NavLink>
        </div>

        <div className="grid grid-cols-12 md:gap-y-5 md:gap-x-8 gap-y-5 gap-x-8">
            {
              !dataSoonAndNowMoive.movieCommingSoon 
              ?<>
                {
                  [...Array(12)].map((i) => (
                    <div key={i} className="xl:col-span-3 col-span-6 ">
                      <div className='relative'>
                        <p className='global skeleton'></p>
                        <img src={skeleton23} alt=""/>
                      </div>
                    </div>
                  ))
                }
                
              </>
              :<>
                {isMovie
                  ?dataSoonAndNowMoive.movieCommingSoon.map((movie, i) => (
                    <div key={i} className="xl:col-span-3 col-span-6 ">
                      <CartMovie dataMovie={movie} />
                    </div>
                  ))
                  :dataSoonAndNowMoive.movieShowing.map((movie, i) => (
                    <div key={i} className="xl:col-span-3 col-span-6 ">
                      <CartMovie dataMovie={movie} />
                    </div>)
                )}
              </>
            }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  dataSoonAndNowMoive: {
    movieCommingSoon: state.storeMovieManage.movieCommingSoon,
    movieShowing: state.storeMovieManage.movieShowing,
  }
})

const mapDispatchToProps = (dispatch) => ({
  actionGetDataSoonAndNowMoive: () => {
    dispatch({ type: "GET_DATA/StoreMovie" })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AreaShowMoive)

