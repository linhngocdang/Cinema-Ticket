import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { useState } from 'react';
import BookingPaySuccess from './BookingPaySuccess/BookingPaySuccess';

const BookingPay = () => {
    const [bank, setBank] = useState(1)
    const data = [
        {
            "Id": 1,
            "Name": "TP Bank",
            "Logo": "https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-TPBank.png"
        },
        {
            "Id": 2,
            "Name": "Agribank",
            "Logo": "https://seeklogo.com/images/A/agribank-2014-logo-D607F59D1E-seeklogo.com.png"
        }
    ]

    const [modal, setModal] = useState(false)
    const handleOnClick = () => {
        setModal(!modal)
    }
    //   const handleChooseBank =
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-center text-2xl font-bold mb-10'>PHƯƠNG THỨC THANH TOÁN</h2>
            <ul className='xl:max-w-xs'>
                {data.map((v, i) =>
                    <li className='flex items-center justify-start cursor-pointer mb-5' key={i}
                        onClick={() => setBank(v.Id)}
                    >
                        <div className='basis-2/12'>
                            <img src={v.Logo} alt="" />
                        </div>
                        <p className='text-lg font-medium mx-4 basis-8/12'>{v.Name}</p>
                        <p onClick={handleOnClick} className={`${bank == v.Id ? "bg-orange-500 text-white border-none" : ""}  w-8 h-8 flex flex-center-ct round-circle-ct border-4 border-solid border-zinc-500`}>{bank == v.Id ? <GiCheckMark /> : ""}</p>
                    </li>
                )}

            </ul>
            {
                modal && <BookingPaySuccess onClick={handleOnClick}/>
            }
        </div>
    );
}

export default BookingPay;
