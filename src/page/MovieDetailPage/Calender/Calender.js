import React, { useState } from 'react';
import getSevenNextDate from '../../../common/renderSeatsCinema/getSevenNextDate';
import dateFormat from 'dateformat';
import './Calender.scss';
import { connect } from 'react-redux';

const Calender = ({dateStart,actionSetFilterCalender,dataCalenderAvailability,movieDetailPageManage}) => {
    console.log(">>>>movieDetailPageManage", movieDetailPageManage);
    const [focusDate, setfocusDate] = useState(dateStart)
    const day=["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"]

    return (
        <div className='calender flex  wraper-slider relative '>
       
            <ul className='md:hidden calender-item flex overflow-hidden overscroll-contain overflow-x-scroll pb-2' >
                {getSevenNextDate(new Date(dateStart).valueOf(), 7).map((v, i) =>
                    <li key={i} 
                    className={"w-20 text-center px-1 mx-3 flex-shrink-0 cursor-pointer"}
                    onClick={true ? () => {
                        setfocusDate(v)
                        actionSetFilterCalender(v)
                    } : undefined}>
                        <p style={{ backgroundColor: dateFormat(new Date(focusDate),"dd")==dateFormat(new Date(v),"dd")? "#F97316" : undefined }} className="text-sm font-bold py-1 bg-zinc-200 hover:scale-125">{day[new Date(v).getDay()]}</p>
                        <p style={{ borderColor: dateFormat(new Date(focusDate),"dd")==dateFormat(new Date(v),"dd")? "#F97316" : undefined }} className='text-lg rounded-b-lg border border-solid border-zinc-300 font-normal text-zinc-00 py-1 '>{dateFormat(new Date(v), "dd")}</p>
                    </li>
                )}
            </ul>
            <ul className='hidden md:flex calender-item overflow-hidden ref={ulElement}' >
                {getSevenNextDate(new Date(dateStart).valueOf(), 7).map((v, i) =>
                    <li key={i} 
                    className="w-20 text-center px-1 mx-3 flex-shrink-0 cursor-pointer"
                    onClick={true ? () => {
                        setfocusDate(v)
                        actionSetFilterCalender(v)
                    } : undefined}>
                        <p style={{ backgroundColor: dateFormat(new Date(focusDate),"dd")==dateFormat(new Date(v),"dd")? "#F97316" : undefined }} className="text-sm font-bold py-1 bg-zinc-200 hover:scale-125">{day[new Date(v).getDay()]}</p>
                        <p style={{ borderColor: dateFormat(new Date(focusDate),"dd")==dateFormat(new Date(v),"dd")? "#F97316" : undefined }} className='text-lg rounded-b-lg border border-solid border-zinc-300 font-normal text-zinc-00 py-1 '>{dateFormat(new Date(v), "dd")}</p>
                    </li>
                )}
            </ul>
        </div>
    );

}
const mapStateToProps = (state) => ({
    dateStart:state.movieDetailPageManage.dateStart,
    dataCalenderAvailability:state.movieDetailPageManage.calenderAvailability,
    movieDetailPageManage:state.movieDetailPageManage,
})


const mapDispatchToProps = (dispatch) => ({
    actionSetFilterCalender: (data)=>{
        dispatch({
            type: "SET_DATA/FilterMovieDetailPage",
            payload: data
        })
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Calender)

