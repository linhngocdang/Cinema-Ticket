import React from 'react';

const NavProcessBooking = (props) => {
    return (
            <div className='process flex justify-center items-center my-2' >
                <div className='flex process-item flex-center-ct mx-1 font-bold '>
                    <p className={` w-10 h-10 mr-2 flex round-circle-ct flex-center-ct ${props.process>=0 ? "circle-process bg-blue-500 text-white" : ""}`}>1</p>
                    <p>CHỌN GHẾ</p>
                    
                </div>
                <div className={` w-12 h-1 rounded-sm ${props.process>=0  ? " bg-blue-500" : "bg-gray-400"}`}></div>
                <div className='flex process-item flex-center-ct mx-1 font-bold '>
                    <p className={` w-10 h-10 mr-2 flex round-circle-ct flex-center-ct ${props.process>=1 ? "circle-process bg-blue-500 text-white" : ""}`}>2</p>
                    <p>CHỌN THỨC ĂN</p>

                </div>
                <div className={` w-12 h-1 rounded-sm ${props.process>=0  ? " bg-blue-500" : "bg-gray-400"}`}></div>
                <div className='flex process-item flex-center-ct mx-1 font-bold '>
                    <p className={` w-10 h-10 mr-2 flex round-circle-ct flex-center-ct ${props.process>=2 ? "circle-process bg-blue-500 text-white" : ""}`}>3</p>
                    <p>THANH TOÁN</p>

                </div>
            </div>
    );
}

export default NavProcessBooking;
