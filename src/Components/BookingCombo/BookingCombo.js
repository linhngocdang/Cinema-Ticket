import React from 'react';
import ItemCombo from '../ItemCombo/ItemCombo';
import { connect } from 'react-redux';

const BookingCombo = (props) => {
    console.log("props list combo", props.dataCombo);
    // concessionItems
    let totalCombo=0
    // if(props.dataBookingUserInforCombo.length){
    //     totalCombo=props.dataBookingUserInforCombo.reduce((previous, current) =>previous +current.displayPrice*current.number,0)
    //     console.log(">>>>>>totall", totalCombo)
    // }
    return (
        <div className='mx-5'>
            {Object.keys(props.dataCombo)?.length?<div className=''>
                <div className=' [&:nth-child(n)]:text-xl [&:nth-child(n)]:font-bold item-combo bg-orange p-2 bg-zinc-300 md:flex'>
                    <div className=' text-center md:basis-8/12 xl:basis-7/12'>COMBO</div>
    
                    <p className='md:flex md:basis-4/12 xl:basis-5/12 md:text-center items-center mt-4 md:m-0 md:ml-3 justify-between hidden'><span className='basis-6/12'>Số lượng</span><span className='basis-6/12'>Giá (VNĐ)</span></p>
                </div>
                {Object.keys(props.dataCombo).map(idCombo=><ItemCombo key={idCombo} dataItemCombo={props.dataCombo[idCombo]}/>)}
                <div className='bg-orange-500 flex font-bold text-2xl text-white py-2'>
                    <p className='md:basis-10/12 ml-2 '>Tổng: </p> <p className='md:basis-3/12 text-center'>{Object.keys(props.dataCombo).reduce((previousValue, currentValue) =>props.dataCombo[currentValue].displayPrice*props.dataCombo[currentValue].number+previousValue , 0)} đ</p>
                </div>
            </div>:""}

        </div>
    );
}


const mapStateToProps = (state) => ({
    dataCombo: state.bookingPageManage.comboUserBooking,
    
})

const mapDispatchToProps = (dispatch)=>({
    // actionGetDataSeatsBooking: ()=>
    //     dispatch({
    //         type: "GET_DATA/seatsBooking"
    //     })
})
export default connect(mapStateToProps,mapDispatchToProps)(BookingCombo);

