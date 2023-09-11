import React from 'react'

export default function UserInfor() {
    return (
        <div className='userInfor'>
            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div >
                        <label htmlFor="website" class="block mb-2  font-medium">Họ và tên</label>
                        <input
                            type="text"
                            id="fullname"
                            class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <div >
                        <label htmlFor="email" class="block mb-2 font-medium ">Email</label>
                        <input
                            type="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5" />
                    </div>
                    <div >
                        <label htmlFor="phone" class="block mb-2 text-sm font-medium ">Số điện thoại</label>
                        <input
                            type="tel"
                            id="phone"
                            class="bg-gray-50 border border-gray-300  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                    </div>
                    <div >
                        <label htmlFor="birthday" class="block mb-2 text-sm font-medium">Ngày sinh</label>
                        <input
                            type="date"
                            id="birthday"
                            class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                    <div >
                        <label htmlFor="address" class="block mb-2 font-medium ">Địa chỉ</label>
                        <input
                            type="text"
                            id="address"
                            class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                    </div>
                    <div >
                        <label htmlFor="city" class="block mb-2 font-medium">Tỉnh/Thành Phố</label>
                        <input
                            type="tel"
                            id="city"
                            class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <div>
                        <label htmlFor="district" class="block mb-2 font-medium ">Quận/Huyện</label>
                        <input
                            type="url"
                            id="district"
                            class="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                </div>
                <button
                    type="submit"
                    class="text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">
                    Lưu lại
                </button>
            </form>
        </div>
    )
}
