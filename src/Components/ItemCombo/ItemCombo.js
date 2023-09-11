import React from 'react';
import InputNumber from './InputNumber/InputNumber';
import {HiPlus,HiMinus} from "react-icons/hi"
import { connect } from 'react-redux';

const ItemCombo = (props) => {
    const {imageUrl, id,description,extendedDescription, displayPrice,number }=props.dataItemCombo
    console.log(">>>>>>>>>>>>>>> reder lại",number);
   

    return (
        <div className='item-combo bg-orange p-2 bg-zinc-300 md:flex mt-2  rounded-md md:rounded-none'>
            <div className='md:basis-2/12 xl:basis-2/12'>
                <img className='rounded-md' src={imageUrl} alt="combo"/>
            </div>
            <div className='md:ml-3 md:basis-6/12 xl:basis-5/12'>
                <p className='font-medium mt-2 md:m-0 text-sm'>{description}</p>
                <p className='text-sm  mt-2 md:m-0 font-medium text-zinc-500'>{extendedDescription}</p>
                <p className='font-medium mt-2 md:m-0 text-sm'>Giá: {displayPrice} đ</p>
            </div>
            <div className='flex md:basis-4/12 xl:basis-5/12 md:text-center items-center mt-4 md:m-0 md:ml-3 justify-between'>
                <div className='basis-6/12 md:order-1 order-2 md:justify-center'>
                    <div className='flex items-center md:justify-center'>
                        <span style={{borderRadius:"50%"}} className={`cursor-pointer text-lg ml-2 inline-block hover:text-white hover:bg-orange-500 p-1 ${number? "bg-blue-600":"pointer-events-none  bg-zinc-500"}`} onClick={()=>props.actionComboDecrease(id)}><HiMinus/></span>
                        <input className='w-12 font-semibold text-center focus:outline-none rounded mx-2 text-lg' onChange={(e)=>props.actionOnchangeCombo(e.target.value)} value={number} />
                        <span style={{borderRadius:"50%"}} className='cursor-pointer text-lg mr-2 inline-block hover:text-white hover:bg-orange-500 bg-blue-600 p-1' onClick={()=>props.actionComboIncrease(id)}><HiPlus/></span>
                    </div>
                </div>
                <span className='text-xl font-bold basis-6/12 md:order-2 order-1'> {number*displayPrice} <span className=''>đ</span> </span>
            </div>
        </div>
 
    );
}



const mapDispatchToProps = (dispatch)=>({
    actionComboIncrease:(id)=>{
        dispatch({
            type:"SET_DATA/actionComboIncrease",
            payload: id
        })
    },
    actionComboDecrease:(id)=>{
        dispatch({
            type:"SET_DATA/actionComboDecrease",
            payload: id
        })
    },
    actionOnchangeCombo:(value)=>{
        dispatch({
            type:"SET_DATA/actionOnchangeCombo",
            payload: value
        })
    },

})
export default connect(undefined,mapDispatchToProps)(ItemCombo) ;

