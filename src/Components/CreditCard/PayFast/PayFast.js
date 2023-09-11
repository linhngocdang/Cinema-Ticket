import React, { useEffect, useState } from 'react'
import CreditCard from '../CreditCard'
import { HiArrowLeft, HiArrowRight } from "react-icons/hi"
import { useNavigate } from 'react-router-dom';
import email from "../../../assets/images/email.png";
const PayFast = (props) => {
    const nav = useNavigate()
    const [cardBankChoose, setcardBankChoose] = useState(undefined);

    const [creditCard, setCreditCard] = useState(false)
    const [dataBank, setDataBank] = useState(undefined);

    const handleCreditCard = () => {
        setCreditCard(!creditCard)
    }
    useEffect(()=>{
        fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/Bank/CardRef/${localStorage.getItem("email")}`)
        .then((res)=>res.json())
        .then((data) =>{console.log("list Bank", data);
            setDataBank(data)
        })
    },[])

    return (
        <div className=''>
            {
                creditCard ? <CreditCard onClick={handleCreditCard} />
                    : <>
                        <h1 className='flex items-center justify-center text-white bg-blue-500 justify-between px-2 py-4 mb-5'><button onClick={() => nav(-1)} className='text-3xl'><HiArrowLeft /></button>
                            <span className='font-medium text-xl'>THÔNG TIN THANH TOÁN</span>
                            <button className='text-3xl invisible'><HiArrowRight /></button>
                        </h1>
                        <div>
                            <img className='w-[80px] m-auto mt-5' src={email} alt="emailIamge" />
                        </div>
                        <form className='mx-10 h-screen mt-5'>
                            <h2 className='flex justify-center font-semibold text-2xl mb-5'>THANH TOÁN NHANH QUA GMAIL</h2>
                            <h3 className='font-semibold text-lg text-orange-500 hover:opacity-90 cursor-pointer mb-8 flex justify-center hover:opacity-80' onClick={handleCreditCard}>Chọn loại thẻ</h3>
                           
                                {dataBank ? <ul>
                                      {dataBank.map((v, i)=><li onClick={()=>setcardBankChoose(v.CardNumber)} className='flex justify-center items-center '><img width={64} src={v.Logo} alt="logo"/><span className='text-xl font-semibold'>{v.Name}</span></li>)}
                                </ul>:undefined}

                            <div className='flex justify-center mb-5'>
                                <button type="button"
                                    className='border border-solid border-orange-500 p-2 rounded-md mt-6 bg-orange-500 text-white font-medium hover:opacity-80'>
                                    KIỂM TRA
                                </button>
                                {/* <button type="button"
                                    className='border border-solid border-orange-500 p-2 rounded-md mt-6 bg-orange-500 text-white font-medium hover:opacity-80'>
                                    THANH TOÁN
                                </button> */}
                            </div>
                        </form>
                    </>
            }
        </div>

    )
}

export default PayFast;
