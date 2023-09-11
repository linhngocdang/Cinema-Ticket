import React, { useEffect } from 'react';
import ListCombo from '../../Components/BookingCombo/BookingCombo';
import Ticked from './../../Components/Ticked/Ticked';
import { useState } from 'react';
import BookingSeat from '../../Components/BookingSeat/BookingSeat';
import { connect } from 'react-redux';

import { useLocation } from "react-router-dom";
import BarBookingMobile from '../../Components/BarBookingMobile/BarBookingMobile';



const ProcessBooking = (props) => {
    const location=useLocation()

    const dataObjInUrlSearch=location.search.match(/[^?&]+/g).reduce((previousValue, currentValue) => {
        return {...previousValue,[currentValue.match(/\w+/)]:currentValue.match(/\d+/)[0]}
    },{})
    const dataInUrlPathname=location.pathname.match(/[^/booking\-ticket/][\w\W]+/)[0]
    const [process, setProcess] =  useState(0)

    const handleContinue=(data)=>{
        if(process==0) setProcess(1);
        // else if(process==1) setProcess(2);
    }

    const handleBack=()=>{
        // if(process==2) setProcess(1);
        if(process==1) setProcess(0);
    }

    useEffect(() => {
        props.actionResetBookingUserInfor()
        props.actionGetDataAllBooking(dataObjInUrlSearch)
        props.actionSetDataBookingUser(location.state)
    }, [dataObjInUrlSearch.sessionId,dataObjInUrlSearch.cinemaId])

    return (
            <div>
                
                <div className='process-booking max-w-full xl:max-w-7xl mx-auto grid grid-cols-12 gap-1'>
                <div className="col-span-12 xl:col-span-8">
                    {
                        process == 1 ? <ListCombo /> :  <BookingSeat/>
                    }
                </div>
                <div className='col-span-12 xl:col-span-4 bg-zinc-300'>
                    <Ticked process={process} handleContinue={handleContinue} handleBack={handleBack} />
                </div>
                
            </div>
            <div>
                <BarBookingMobile/>
                </div>
            </div>
    );
}



const mapDispatchToProps = (dispatch)=>({

    actionGetDataAllBooking: (data)=>
        dispatch({
            type: "GET_DATA/dataAllBooking",
            payload: data
        }),

    actionSetDataBookingUser: (data)=>
        dispatch({
            type: "GET_DATA/dataBookingUserInfor",
            payload: data
        }),
    actionResetBookingUserInfor: ()=>{
        dispatch({
            type: "SET_DATA/resetBookingUserInfor"
        })
    
    },

})
export default  connect(undefined,mapDispatchToProps)(ProcessBooking) ;

