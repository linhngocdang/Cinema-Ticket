import React, { useState } from 'react'

export default function UserTransaction() {
    const [data, setData] = useState([])
    return (
        <div className='userTransaction'>
            <div className='mb-10'>
                <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-3">
                        <div >
                            <label class="block mb-2 ">Từ</label>
                            <input
                                type="date"
                                class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            />
                        </div>
                        <div >
                            <label class="block mb-2 ">Đến</label>
                            <input
                                type="date"
                                class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div className='md:overflow-hidden overflow-x-scroll h-40' >
                <table className="w-full text-sm text-left ">
                    <thead className="md:text-base text-sm text-white bg-amber-600 whitespace-nowrap">
                        <tr>
                            <th scope="col" class="px-6 py-3">Mã vé </th>
                            <th scope="col" class="px-6 py-3">Tên phim</th>
                            <th scope="col" class="px-6 py-3">Thời gian đặt</th>
                            <th scope="col" class="px-6 py-3">Số ghế</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                        {
                            data.length === 0
                                ? <td  colSpan={4} className='py-5 text-center md:text-lg text-base whitespace-nowrap border border-solid border-gray-400 border-t-0 border-l border-r border-b'>Hiện chưa có giáo dịch nào!</td>
                                : <>
                                        <td class="px-6 py-4">
                                            {/*  */}
                                        </td>
                                        <td class="px-6 py-4">
                                            {/*  */}
                                        </td>
                                        <td class="px-6 py-4">
                                            {/*  */}
                                        </td>
                                        <td class="px-6 py-4">
                                            <ul>
                                                <li>
                                                    {/*  */}
                                                </li>
                                            </ul>
                                        </td>
                                </>
                        }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
