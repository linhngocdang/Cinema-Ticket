// import React from 'react';
// import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
// import logo from "../../assets/images/logo-cinema-1.png"
// import ItemListSession from '../ItemListSession/ItemListSession';
// import "./ItemCinema.scss"
// import { useState } from 'react';
// import dateFormat from 'dateformat';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { connect } from 'react-redux';

// const ItemCinema = (props) => {
//     const { address, code, dates, name } = props?.dataItemCinema
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [isDrop, setIsDrop] = useState(false)
//     const nav = useNavigate()
//     const [isReadMoreShown, setReadMoreShown] = useState(false);
//     const handleClick = () => {
//         setReadMoreShown(!isReadMoreShown);
//     }

//     return (
//         <div className='item-cinema bg-white overflow-hidden border-solid border-white border rounded-md shadow-xl'>
//             <div className='flex justify-between bg-zinc-300 hover:bg-slate-100 p-3 hover:cursor-pointer' onClick={() => {
//                 setIsDrop(!isDrop)
//             }}>
//                 <div className="flex">
//                     <div className='w-16 md:w-24 mr-5'>
//                         <img src={logo} alt="" />
//                     </div>
//                     <div>
//                         <h1 className='flex items-center justify-between text-sm md:text-xl font-medium '>{name}</h1>
//                         <div className='md:hidden text-sm '>
//                             {isReadMoreShown
//                                 ? address
//                                 : address.substring(0, 20)}
//                             <button onClick={handleClick}
//                                 className='md:hidden text-zinc-400 underline decoration-solid text-sm'>{isReadMoreShown ? "Thu gọn" : "...Xem thêm"}
//                             </button>
//                         </div>
//                         <p className='hidden md:block text-sm md:text-lg'>{address}</p>


//                     </div>
//                 </div>
//             </div>
//             <div className='area-session flex mt-2 md:mt-5 p-3 flex-wrap'>
//                 {dates.filter((infor) => infor.showDate == dateFormat(new Date(props.filterDate), "dd/mm/yyyy"))?.map((inforFilter) => inforFilter.bundles[0].sessions.map((v, i) => <span key={i} onClick={() => {
//                     console.log(">>>> chuyen", v)
//                     nav(`/booking-ticket/${props.dataMovie.slug}?cinemaId=${v.cinemaId}&sessionId=${v.sessionId}`, {
//                         state: {
//                             dayOfWeekLabel: inforFilter.dayOfWeekLabel,
//                             TheaterName: v.screenName,
//                             ShowDate: v.showDate,
//                             ShowTime: v.showTime,
//                             CinemaName: name,
//                             ImageLandscape: props.dataMovie.imageLandscape,
//                             ImagePortrait: props.dataMovie.imagePortrait,
//                             FilmName: props.dataMovie.name,
//                         }
//                     })
//                 }} className='inline-block mr-2 md:mr-3 border md:border-2 border-blue-400 border-solid px-1 md:px-2 py-1 my-1 md:my-3 cursor-pointer hover:bg-slate-200 rounded-md'><span className='text-sm md:text-lg font-medium'>{v.showTime}</span></span>))}
//             </div>

//         </div>
//     );
// }

// const mapStateToProps = (state) => ({
//     dataMovie: state.storeMovieManage.movieDetailPage.movieDetail,
// })

// const mapDispatchToProps = (dispatch) => ({
//     actionGetDataSeatsBooking: () =>
//         dispatch({
//             type: "GET_DATA/seatsBooking"
//         })
// })
// export default connect(mapStateToProps, mapDispatchToProps)(ItemCinema);

