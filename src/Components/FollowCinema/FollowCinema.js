import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './FollowCinema.scss';
import ItemListCinema from '../ItemListCinema/ItemListCinema';
import ItemListMoive from '../ItemListMoive/ItemListMoive';
import ItemListSession from '../ItemListSession/ItemListSession';
const FollowCinema = (props) => {
    const { allCinema, cinemaDetails } = props.dataBookingTicket;
    const [selectCinema, setSelectCinema] = useState({
        // code: ,
        // delivery:{

        // }

    })
    const [selectMovie, setSelectMovie] = useState({
        dates:[],
        delivery:{}
    })
    const [chooseMovie, setChooseMovie]=useState("")
    const [chooseCimena, setChooseCimena]=useState("")


    useEffect(() => {
        if (!allCinema) {
            props.actionGetDataAllCinema()
        }
    }, [])
    const handleUpdate = (code) => {
        props.actionGetDataCinemaDetails(code)
    };

    return (
        <>
            <div className="follow-cinema grid grid-cols-12 gap-8">
                <div className="select-movie col-span-12 md:col-span-4 ">
                    <h2 className="p-2 font-semibold text-lg md:text-xl text-center bg-orange-500 text-white ">Chọn Rạp</h2>
                    <div className='md:overflow-hidden md:h-auto overflow-y-auto h-48'>
                        {
                            allCinema && allCinema.map((cinema, index) => <div className={`${chooseCimena==cinema.id ?"bg-zinc-200":undefined }`} key={index}>
                                <ItemListCinema valueCinema={cinema} onClick={() => { setChooseCimena(cinema.id); setChooseMovie(""); setSelectCinema({
                                    code:cinema.code,
                                    delivery:{
                                        CinemaName:cinema.name,
                                    }
                                }); handleUpdate(cinema.code) }} />
                            </div>)
                        }
                    </div>
                </div>

                <div className="select-cinema col-span-12 md:col-span-4 ">
                    <h2 className="p-2 font-semibold text-lg md:text-xl text-center bg-orange-500 text-white">Chọn Phim</h2>
                    <div className='md:overflow-hidden md:h-auto overflow-y-auto h-48'>
                        {
                            cinemaDetails.length ===0
                            ? <div className='border-b-2 border-r-2 border-l-2 border-solid border-zinc-200 py-5 px-2.5'>{"Vui lòng chọn phim"}</div>
                            : cinemaDetails.map((value, index) => <div className={`${chooseMovie==value.id ? "bg-zinc-200" :undefined}`} key={index}>
                                <ItemListMoive value={value} onClick={() => { setChooseMovie(value.id); setSelectMovie({
                                    dates:value.dates,
                                    delivery: {slug:value.slug, age: value.age, ImagePortrait:value.imagePortrait, ImageLandscape:value.imageLandscape,duration:value.duration,FilmName:value.name}
                                }) }} />
                            </div>)
                        }
                    </div>
                </div>

                <div className="select-time col-span-12 md:col-span-4 ">
                    <h2 className="p-2 font-semibold text-lg md:text-xl text-center bg-orange-500 text-white">Chọn Suất</h2>
                    <div className='md:overflow-hidden md:h-auto overflow-y-auto h-48'>
                        {
                            selectMovie.dates.length === 0
                                ? <div className='border-b-2 border-r-2 border-l-2 border-solid border-zinc-200 py-5 px-2.5'>{"Vui lòng chọn suất"}</div>
                                : selectMovie.dates?.map((valueTime, index) => <div key={index}>
                                    <ItemListSession valueCinemaAndMovie={{
                                        ...selectCinema.delivery,
                                        ...selectMovie.delivery
                                    }} valueTime={valueTime} />
                                </div>)
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    dataBookingTicket:
    {
        allCinema: state.allCinemaManage.allCinema,
        cinemaDetails: state.allCinemaManage.cinemaDetails
    }
})

const mapDispatchToProps = (dispatch) => ({
    actionGetDataAllCinema: () => {
        dispatch({ type: "GET_DATA/AllCinema" })
    },
    actionGetDataCinemaDetails: (code) => {
        dispatch({
            type: "GET_DATA/CinemaDetail",
            payload: code
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FollowCinema)



