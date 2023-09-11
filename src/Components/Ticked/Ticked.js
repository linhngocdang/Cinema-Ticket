import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Ticked = (props) => {
    const nav=useNavigate()
    const {TheaterName,CinemaName,ImageLandscape,dayOfWeekLabel,ShowTime, ShowDate,combo,FilmName,seatsChoosed,age}=props.dataBookingUserInfor
    console.log(">>>>>>>>>>>dataBookingUserInfor", props.dataBookingUserInfor);
    
    const totalTickedCouple=seatsChoosed.couple.length*150000
    const totalTickedStandard=seatsChoosed.standard.length*70000
    const totalSeats=totalTickedCouple+totalTickedStandard
    const total= Object.keys(props.comboUserBooking).reduce((prev, curr) =>props.comboUserBooking[curr].number*props.comboUserBooking[curr].displayPrice+prev, totalSeats)
    console.log("của toognt nhà" ,total );
    return (
        <div className='ticked m-3'>
            <div className='flex flex-col'>
                <img className='rounded-md' src={ImageLandscape} alt=""/>
                <h2 className='text-center font-semibold text-lg'>{FilmName}</h2>
            </div>
            {age>0?<div className='flex text-red-600 font-medium'><p className='w-8 mr-2'><img className='w-full' src={age?`https://www.galaxycine.vn/website/images/ic-c${age}.png`:undefined} alt=""/></p> (*) Phim chỉ dành cho khán giả từ {age} tuổi trở lên</div>:undefined}
            <div className=''>
                <p><span className='font-semibold'>Rạp: </span> {CinemaName} | {TheaterName}</p>
                <p><span className='font-semibold'>Suất chiếu: </span> {ShowTime} | {dayOfWeekLabel}, {ShowDate}</p>
                <hr/>
                
                <div>
                    <p className="text-center my-2 font-medium ">Thông tin giao dịch</p>
                    <ul>
                        <li>
                            {seatsChoosed.standard.length?<p className='flex justify-between'><span><span className='font-medium'>{seatsChoosed.standard.length}x Người Lớn</span> - {seatsChoosed.standard.join(" , ")} </span> <span className='ml-4 font-bold'>{totalTickedStandard }đ</span></p>:undefined}
                            {seatsChoosed.couple.length?<p className='flex justify-between'><span><span className='font-medium'>{seatsChoosed.couple.length}x Ghế đôi</span> - {seatsChoosed.couple.map(v=>v.replace("-",";")).join(" , ")}  </span> <span className='ml-4 font-bold'>{totalTickedCouple}đ</span></p>:undefined}
                        </li>
                        <li><hr/></li>
                        <li>
                            {Object.keys(props.comboUserBooking).length?
                            Object.keys(props.comboUserBooking).map(id=><p key={id} className={` flex justify-between  ${props.comboUserBooking[id].number?undefined:"hidden"}`}><span className=''><span className='font-medium'>{props.comboUserBooking[id].number}  x  </span>{props.comboUserBooking[id].description}</span><span className='ml-4 font-bold'>{props.comboUserBooking[id].number*props.comboUserBooking[id].displayPrice}đ</span></p>):""}
                            
                        </li>
                        <li className='flex justify-between font-bold text-xl'><span className=''>Tổng cộng : </span><span className='ml-4 text-orange-500'>{total}đ</span></li>
                        <li className='justify-evenly flex mt-4'>
                        <button onClick={()=>props.handleBack()} className={`bg-orange-500 px-3 py-2 rounded-md font-semibold text-white hover:bg-orange-400 transition-colors }`} type="button" disabled={props.process==0}> QUAY LẠI </button>
                        <button onClick={()=>{
                            if(props.process==0){
                                if(seatsChoosed.standard.length||seatsChoosed.couple.length){
                                    props.handleContinue()
                                }
                                
                                else alert("Hãy đặt vé trước");
                            }
                            else{nav("/thanh-toan", {state:{total}})}}}
                            className={`bg-orange-500 px-3 py-2 rounded-md font-semibold text-white hover:bg-orange-400 transition-colors`}
                            type="button" > {props.process==1?"THANH TOÁN": "TIẾP TỤC" }</button>
                        </li>
                        
                    </ul>
                </div>
                
            </div>
            
        </div>
    );
}


const mapStateToProps = (state) => ({
    dataBookingUserInfor:state.bookingPageManage.dataBookingUserInfor,
    comboUserBooking:state.bookingPageManage.comboUserBooking,
})


export default connect(mapStateToProps)(Ticked);
