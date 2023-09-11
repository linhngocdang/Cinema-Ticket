import React from 'react';
import './BookingPaySuccess.scss';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/galaxy-logo.png";
import { connect } from 'react-redux';
import  dateFormat  from 'dateformat';
const BookingPaySuccess = (props) => {
    const dataTicket=props.bookingPageManage.dataBookingUserInfor
    return (
        <div className="modal">
            <div onClick={()=>props.actionPayingNormal()} className="overlay"></div>
            <div className='form-modal mx-8 md:mx-4 '>
                <div className="modal-content w-sm md:w-[600px] border border-4 border-solid border-orange-500">
                    <Link to="/" ><img className='w-[250px] md:w-80 m-auto py-5' src={logo} alt="logo" /></Link>
                    <div className='px-5 md:px-2'>
                        <h2 className='text-orange-500 text-xl font-medium'>Chúc mừng bạn đã đặt vé thành công</h2>
                        <div className='text-sm md:test-base mt-5'>
                            <div className='grid md:grid-cols-12 mb-2'>
                                <p className='md:col-span-4 font-medium place-self-start'>Rap:</p>
                                <p className='md:col-span-8 place-self-start ml-4 md:ml-0'>{dataTicket.CinemaName} | {dataTicket.TheaterName}</p>
                            </div>

                            <div className='grid md:grid-cols-12 mb-2'>
                                <p className='md:col-span-4 font-medium place-self-start'>Thông tin phim:</p>
                                <p className='md:col-span-8 place-self-start  ml-4 md:ml-0'>{dataTicket.FilmName}</p>
                            </div>

                            <div className='grid md:grid-cols-12 mb-2'>
                                <p className='md:col-span-4 font-medium place-self-start'>Suất chiếu:</p>
                                <p className='md:col-span-8  place-self-start  ml-4 md:ml-0'>{dataTicket.ShowTime} | {dateFormat(new Date (dataTicket.ShowDate), "dd/mm/yyyy" )}</p>
                            </div>

                            <div className='grid md:grid-cols-12 mb-2'>
                                <p className='md:col-span-4 font-medium place-self-start'>Thông tin vé:</p>
                                <p className='md:col-span-8 place-self-start  ml-4 md:ml-0'>Ghế  {[...dataTicket.seatsChoosed.couple,...dataTicket.seatsChoosed.standard].join(" ; ")} </p>
                            </div>

                            <div className='grid md:grid-cols-12 mb-2'>
                                <p className='md:col-span-4 font-medium place-self-start'>Đồ ăn và thức uống:</p>
                                <p className='md:col-span-8 place-self-start  ml-4 md:ml-0'>{Object.keys(props.bookingPageManage.comboUserBooking).map(id=>props.bookingPageManage.comboUserBooking[id].description).join(",")}</p>
                            </div>
                        </div>
                    </div>


                    <button className="close-modal font-medium text-orange-500 text-2xl hover:opacity-90" onClick={()=>props.actionPayingNormal()}>
                        <MdClose />
                    </button>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    bookingPageManage: state.bookingPageManage,
  })

  const mapDispatchToProps = (dispatch) => ({
    actionPayingNormal: () => {
      dispatch({
        type: "SET_DATA/Toggle_sucess",
        payload: undefined
      })
  
    }
  
  })
  export default connect(mapStateToProps, mapDispatchToProps)(BookingPaySuccess);

