import React, { useState } from 'react';
import { useEffect } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi"
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';
import PayFast from './PayFast/PayFast';
import BookingPay from '../BookingPay/BookingPay';
import BookingPaySuccess from '../BookingPay/BookingPaySuccess/BookingPaySuccess';

const PaymentForm = (props) => {
  const [chooseBank, setChooseBank] = useState(0)
  const [modalPayFast, setModalPayFast] = useState(false)
  const location=useLocation()
  const handlePayFast = () => {
    setModalPayFast(!modalPayFast)
  }
  const nav = useNavigate()
  const [listBankBank, setListBankBank] = useState([])
  useEffect(() => {
    fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/Bank/Bank`)
      .then(res => res.json())
      .then(data => setListBankBank(data))
  }, [])

  const [state, setState] = useState({
    CardNumber: '',
    ExpireDate: '',
    CVV: '',
    CardName: '',
    focus: '',
  });

  const handleInputChange = (evt) => {

    setState({ ...state, [evt.target.name]: evt.target.value });
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.getAttribute("type") }));
  }

  console.log( ">>>>>>>>>>> sessiom OD",props.bookingPageManage.sessionId);



  const hanldePaying = (e) => {
    const { CinemaName, FilmName, ImageLandscape, ImagePortrait, TheaterName, seatsChoosed, ShowDate, ShowTime } = props.bookingPageManage.dataBookingUserInfor
    const { focus, ...restState } = state
    const inforPay = {
      BankId: chooseBank,
      ...restState,
      Price: location.state.total,
      ShowCode: `${props.bookingPageManage.cinemaId}-${props.bookingPageManage.sessionId}`,
      Email: localStorage.getItem("email"),
      CinemaName,
      TheaterName,
      FilmName,
      ImageLandscape,
      ImagePortrait,
      Combo: Object.keys(props.comboUserBooking).map(id => `${props.comboUserBooking[id].number}x${props.comboUserBooking[id].description}`).join(),
      SeatCode: [...seatsChoosed.couple, ...seatsChoosed.standard].join(","),
      ShowTime: ShowDate?`${dateFormat(new Date(ShowDate), "yyyy-mm-dd")}T${ShowTime}Z`:undefined
    }
    e.preventDefault()
    if(props.bookingPageManage.sessionId==undefined||props.bookingPageManage.sessionId==undefined){
      nav("/")
    }
    else if(inforPay){
      props.actionPayingNormal(inforPay)
    }
    else{
      alert("CHỌN THẺ NGÂN HÀNG THANH TOÁN")
    }
  }

  return (
    <div className='h-full bg-zinc-100 pb-10' >
      <div className='border-2 border-zinc-100 border-solid mx-3 rounded-md max-w-xl mx-auto bg-white '>

        {
          modalPayFast
            ? <PayFast onClick={handlePayFast} />
            : <>
              <h1 className='flex items-center justify-center text-white bg-blue-500 justify-between px-2 py-4 mb-5'><button onClick={() => nav(-1)} className='text-3xl'><HiArrowLeft /></button><span className='font-medium text-xl'>THÔNG TIN THANH TOÁN</span><button className='text-3xl invisible'><HiArrowRight /></button></h1>
              <ul className='flex justify-center'>
                {listBankBank.map(v => <li key={v.Id} onClick={() => setChooseBank(v.Id)} className={`${chooseBank == v.Id ? "border-2 border-solid rounded-lg bg-zinc-200 border-orange-500" : ""} p-1 mx-3`} ><img className='w-12' src={v.Logo} alt="" /></li>)}
              </ul>
              <h2 className=' flex justify-center mb-2 mt-10'>
                {chooseBank == 0 ? <p className='font-semibold text-2xl '>CHỌN NGÂN HÀNG</p> : chooseBank == 2 ? <img className='object-contain h-14' src="https://upload.wikimedia.org/wikipedia/vi/thumb/3/3d/Argibank_logo.svg/1280px-Argibank_logo.svg.png" alt="" />
                  : <img className='object-contain h-14' src="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Logo-TPBank.png" alt="" />}
              </h2>
              <h3 className='font-semibold text-lg text-orange-500 hover:opacity-80 cursor-pointer mb-8 flex justify-center ' onClick={handlePayFast}>Thanh toán nhanh qua EMAIL</h3>
              <div className='flex flex-col justify-center items-center ' >
                <div className='col-span-6 relative mb-10'>
                  <Cards
                    number={state.CardNumber}
                    expiry={state.ExpireDate}
                    cvc={state.CVV}
                    name={state.CardName}
                    focused={state.focus}
                    preview={false}
                  />
                </div>

                <form className='grid grid-cols-12 gap-x-2 gap-y-5 mx-5 sm:mr-10'>
                  <div className='col-span-12 border border-zinc-400 border-solid rounded-md px-5  h-12'><input
                    className='h-full w-full focus:outline-none'
                    type="number"
                    name="CardNumber"
                    placeholder="Card Number"
                    value={state.CardNumber}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  </div>
                  <div className='col-span-12 border border-zinc-400 border-solid rounded-md px-5  h-12'><input
                    className='h-full w-full focus:outline-none'
                    type="name"
                    name="CardName"
                    placeholder="Card Name"
                    value={state.CardName}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  </div>
                  <div className='col-span-6 border border-zinc-400 border-solid rounded-md  px-5 h-12'><input
                    className='h-full w-full focus:outline-none'
                    type="expiry"
                    name="ExpireDate"
                    placeholder="Card Expiry"
                    value={state.ExpireDate}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  </div>
                  <div className='col-span-6 border border-zinc-400 border-solid rounded-md  px-5 h-12'><input
                    className='h-full w-full focus:outline-none'
                    type="cvc"
                    name="CVV"
                    placeholder="Card Cvc"
                    value={state.CVV}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  </div>
                  <div className='col-span-12 flex justify-center'>
                    <button type="button" onClick={hanldePaying} className='border border-solid border-orange-500 p-2 rounded-md mt-6 bg-orange-500 text-white font-medium mb-5 hover:opacity-80'>THANH TOÁN</button>
                  </div>
                </form>
              </div>
            </>
        }

      </div>
      {props.isSucess&&<BookingPaySuccess/>}
    </div>
  );
}



const mapStateToProps = (state) => ({
 
  bookingPageManage: state.bookingPageManage,
  comboUserBooking: state.bookingPageManage.comboUserBooking,
  isSucess:state.modalPaySucessManage.isSucess
})
const mapDispatchToProps = (dispatch) => ({
  actionPayingNormal: (infor) => {
    dispatch({
      type: "POST_DATA/PayingNormal",
      payload: infor
    })

  }

})
export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
