import React, { Fragment, useState } from 'react';
import { AiFillLike } from "react-icons/ai";
import { BsClockHistory } from 'react-icons/bs';
import dateFormat from "dateformat";
import "./CartMovieDetail.scss"
import ModalTrailer from './ModalTrailer/ModalTrailer';
import { BsFillPlayCircleFill } from 'react-icons/bs'

const CartMovieDetail = (props) => {
    const { dataMovie } = props
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen(!open);

    const [isReadMoreShown, setReadMoreShown] = useState(false);
    const handleClick = () => {
        setReadMoreShown(!isReadMoreShown);
    }
    return (
        <div className='cart-movie-detail min-h-fit --root:"red"' style={{
            "--urlBackground": "url('" + dataMovie.imageLandscapeMobile + "')"
        }}>
            <div className=' xl:max-w-7xl grid grid-cols-12 gap-x-4 mx-auto py-16'>
                <div className='image-portrait col-span-6 md:col-span-3'>
                    <img className='mx-5 md:mx-0 max-w-[100px] md:max-w-[200px] rounded-md' src={dataMovie.imagePortrait} alt="imageMovie" />
                    <button onClick={() => handleToggle(true)} className="absolute ml-28  md:ml-0 top-24 left-16 border boder-solid border-orange-500 p-1.5 md:p-3 rounded-xl bg-black opacity-80 hover:bg-orange-500">
                        <BsFillPlayCircleFill className='text-2xl md:text-5xl text-white hover:scale-125 ' />
                    </button>
                    {
                        open && <ModalTrailer trailer={dataMovie.trailer}
                            handleToggle={handleToggle} nameMovie={dataMovie.name} />
                    }

                </div>
                <section className='text-white mx-5 md:mx-0 col-span-12 md:col-span-9'>
                    <h2 className='text-xl mt-2 md:text-3xl font-medium mb-3'>{dataMovie.name}</h2>
                    <h3></h3>
                    <div className='flex items-center mb-3 '>
                        {
                            dataMovie.age > 0 && <div className='w-7 md:w-9'>
                                <img className="object-cover w-full rounded-sm" src={`https://www.galaxycine.vn/website/images/ic-c${dataMovie.age}.png`} alt="age" />
                            </div>
                        }
                        {dataMovie.duration && <p className='flex items-center text-sm md:text-lg'><span className='mr-2 ml-2 text-sm md:text-lg'><BsClockHistory /></span> {dataMovie.duration} phút</p>}
                        <button className='px-2 flex flex-center-ct mx-2 bg-blue-700 text-white rounded-sm text-sm md:text-lg' type="button"><span className='mr-1 text-sm md:text-lg'><AiFillLike /></span><span className='mr-1 md:font-medium'>Thích</span><span>11</span></button>
                        <button className='px-2 flex flex-center-ct mx-1 md:mx-2 bg-blue-700 text-white rounded-sm md:font-medium text-sm md:text-lg' type="button"><span>Chia sẻ</span></button>
                    </div>
                    <ul className=''>
                        <li className='mt-1 text-sm md:text-lg'><span className='text-zinc-400  md:font-medium '>Ngày khởi chiếu: </span><span>{dateFormat(new Date(dataMovie.startdate), "dd/mm/yyyy")}</span></li>
                    </ul>
                    <section className='mt-5'>
                        <h2 className="font-medium text-lg md:text-xl mb-3"><span className="inline-block border-orange-500">Nội dung</span></h2>
                        <div className='text-sm md:text-lg'>
                            {
                                isReadMoreShown
                                    ?  <p dangerouslySetInnerHTML={{ __html: dataMovie.description }}></p>
                                    :  <p dangerouslySetInnerHTML={{ __html: dataMovie.description.substring(0, 200) }}></p>
                            }
                            <button onClick={handleClick} className='text-zinc-400 underline decoration-solid text-sm md:text-lg'>{isReadMoreShown ? "Thu gọn" : "...Xem thêm"}</button>
                        </div>

                    </section>
                    <div className="mt-5">
                        <a href='#dat-ve' className="border-solid border-orange-500 border bg-neutral-800 py-2 px-4 rounded-sm hover:bg-orange-500 hover:text-white hover:font-medium">Đặt vé</a>
                    </div>
                </section>
            </div>
        </div >
    );
}

export default CartMovieDetail;




// import React, { useState } from 'react';
// import { AiFillLike } from "react-icons/ai";
// import { BsClockHistory } from 'react-icons/bs';
// import dateFormat from "dateformat";
// import "./CartMovieDetail.scss"
// import ModalTrailer from './ModalTrailer/ModalTrailer';
// import { BsFillPlayCircleFill } from 'react-icons/bs'

// const CartMovieDetail = (props) => {
//     const { dataMovie } = props

//     const [open, setOpen] = useState(false);
//     const handleToggle = () => setOpen(!open);
//     return (
//         <div className='cart-movie-detail min-h-fit --root:"red"' style={{
//             "--urlBackground": "url('" + dataMovie.imageLandscapeMobile + "')"
//         }}>
//             <div className='px-5'>
//                 <div className='xl:max-w-7xl grid grid-cols-12 gap-x-4 mx-auto py-16'>
//                     <div className='image-portrait col-span-4 xl:col-span-3'>
//                         <img className=' rounded-md' src={dataMovie.imagePortrait} alt="imageMovie" />
//                         <button onClick={() => handleToggle(true)} className="play-btn">
//                             <BsFillPlayCircleFill className='icon-play xl:w-20 xl:h-20 h-10 w-10 md:h-16 md:w-16' />
//                         </button>
//                         {
//                             open && <ModalTrailer trailer={dataMovie.trailer}
//                                 handleToggle={handleToggle} nameMovie ={dataMovie.name} />
//                         }
//                     </div>
//                     <section className='text-white col-span-8 xl:col-span-9'>
//                         <h2 className='text-3xl font-medium mb-3'>{dataMovie.name}</h2>
//                         <h3></h3>
//                         <div className='flex items-center mb-3 '>
//                             {
//                                 dataMovie.age > 0 && <div className='w-9'>
//                                     <img className="object-cover w-full rounded-sm" src={`https://www.galaxycine.vn/website/images/ic-c${dataMovie.age}.png`} alt="age" />
//                                 </div>
//                             }
//                             {dataMovie.duration && <p className='flex items-center'><span className='mr-2 ml-2'><BsClockHistory /></span> {dataMovie.duration} phút</p>}
//                             <button className='px-2 flex flex-center-ct mx-2 bg-blue-700 text-white rounded-sm' type="button"><span className='mr-1'><AiFillLike /></span><span className='mr-1 font-medium'>Thích</span><span>11</span></button>
//                             <button className='px-2 flex flex-center-ct mx-2 bg-blue-700 text-white rounded-sm font-medium' type="button"><span>Chia sẻ</span></button>
//                         </div>
//                         <ul className=''>
//                             <li className='mt-1'><span className='text-zinc-400 font-medium '>Ngày khởi chiếu: </span><span>{dateFormat(new Date(dataMovie.startdate), "dd/mm/yyyy")}</span></li>
//                         </ul>
//                         <section className='mt-5'>
//                             <h2 className="font-medium text-xl mb-3"><span className="inline-block border-orange-500">Nội dung</span></h2>
//                             <p className='md:block hidden' dangerouslySetInnerHTML={{ __html: dataMovie.description }}></p>
//                         </section>
//                         <div className="mt-5">
//                             <a href='#dat-ve' className="border-solid border-orange-500 border bg-neutral-800 py-2 px-4 rounded-sm hover:bg-orange-500 hover:text-white hover:font-medium">Đặt vé</a>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartMovieDetail;
