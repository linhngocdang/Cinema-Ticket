import React, { useState } from 'react';
import FunExchange from '../../Components/FunExchange/FunExchange';
import UserInfor from '../../Components/UserInfor/UserInfor';
import UserTransaction from '../../Components/UserTransaction/UserTransaction';

const Member = () => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <div className='member'>
            <div className='xl:max-w-7xl mx-auto'>
                <div className="w-full">
                    <ul className="mb-0 list-none pt-4 pb-4 grid grid-cols-12 gap-x-5 gap-y-5">
                        <li className="text-center md:col-span-4 col-span-12 mx-5 md:mx-0">
                            <a className={"md:text-base text-sm font-bold px-5 py-4 shadow-lg rounded block leading-normal " +
                                (openTab === 1 ? "text-white bg-amber-600" : "text-amber-600 bg-white")}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}>
                                THÔNG TIN THÀNH VIÊN</a>
                        </li>
                        <li className="text-center md:col-span-4 col-span-12 mx-5 md:mx-0">
                            <a
                                className={"md:text-base text-sm font-bold px-5 py-4 shadow-lg rounded block leading-normal " +
                                    (openTab === 2 ? "text-white bg-amber-600" : "text-amber-600 bg-white")}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}>
                                GIAO DỊCH CỦA TÔI</a>
                        </li>
                        <li className="text-center md:col-span-4 col-span-12 mx-5 md:mx-0">
                            <a
                                className={"md:text-base text-sm font-bold px-5 py-4 shadow-lg rounded block leading-normal " +
                                    (openTab === 3 ? "text-white bg-amber-600" : "text-amber-600 bg-white")}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}>
                                GIAO DỊCH ĐỔI VUI</a>
                        </li>
                    </ul>

                    <div className="relative bg-white  mb-6 shadow-lg rounded min-h-screen mx-5 md:mx-auto">
                        <div className="px-4 py-5 flex-auto w-full">
                            <div className="tab-content tab-space">
                                {
                                    openTab === 1 && <UserInfor />
                                }
                                {
                                    openTab === 2 && <UserTransaction />
                                }
                                {
                                    openTab === 3 && <FunExchange />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Member;



