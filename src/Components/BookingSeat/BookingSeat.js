import React, { useEffect, useState } from 'react';
import ExplainSeat from '../ExplainSeat/ExplainSeat';
import { connect } from 'react-redux';
import LayoutSeats from '../LayoutSeat/LayoutSeat';

const BookingSeat = (props) => {
    // console.log(">>>>>>>>>>>BookingSeat", props);
    const getSeatCoupleChoosing=(seat)=>{
    
        props.actionGetSeatCoupleChoosing(seat)
        
    }
    const getSeatStandardChoosing=(seat)=>{
        console.log(seat);
        props.actionGetSeatStandardChoosing(seat)
        
    }
    return (
        <div className='seat-cinema '>
            <div className='structure-room w-auto '>
                <div className='area-seat flex flex-col '>
                    <h2 className='md:text-3xl text-xl text-center text-blue-600 mt-5 mb-5 font-bold'>Chọn ghế</h2>
                    {props.dataSeatCinema&&
                    <LayoutSeats 
                        dataSeatCinema={props.dataSeatCinema}
                        dataSeatsBooked={props.dataSeatsBooked}
                        dataSeatsUserChoosing={props.dataSeatsUserChoosing}
                        getSeatStandardChoosing={getSeatStandardChoosing}
                        getSeatCoupleChoosing={getSeatCoupleChoosing}
                        seatsChoosed={props.seatsChoosed}
                    />}
                </div>
                <div className=' pb-3 border-black border-solid border-b-8 border-orange-400 mt-10 md:mx-44 text-center'>Màn hình</div>
            </div>
            <ExplainSeat/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    dataSeatCinema:state.bookingPageManage.dataBookingAll.seatPlan?.seatLayoutData.areas    ,
    dataSeatsBooked: state.bookingPageManage.dataSeatsBooked,
    seatsChoosed: state.bookingPageManage.dataBookingUserInfor.seatsChoosed,

})

const mapDispatchToProps = (dispatch)=>({
    actionGetSeatStandardChoosing: (data)=>dispatch({
        type: "SET_DATA/ChooseSeatStandard",
        payload:data
    }),
    actionGetSeatCoupleChoosing: (data)=>dispatch({
        type: "SET_DATA/ChooseSeatCouple",
        payload:data
    })


})
export default connect(mapStateToProps,mapDispatchToProps)(BookingSeat);
