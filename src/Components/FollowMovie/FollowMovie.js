import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "./FollowMovie.scss";
import ItemListMoive from '../ItemListMoive/ItemListMoive';
import ItemListCinema from '../ItemListCinema/ItemListCinema';
import ItemListSession from '../ItemListSession/ItemListSession';

const FollowMovie = (props) => {
    const { movieShowing, buyTicket } = props.dataBookingTicket;
    const [selectCard, setSelectCard] = useState({
        // slug:
        // age:
        //id:
        //imagePortrait
        //imageLandscape
    });
    const [selectCinema, setSelectCinema] = useState({
        inforCimena: {},
        dates: []
    });
    const [chooseMovie, setChooseMovie]=useState("")
    const [chooseCimena, setChooseCimena]=useState("")

    useEffect(() => {
        if (!movieShowing) {
            props.actionGetDataSoonAndNowMoive()
        }
    }, []);

    const handleUpdate = (id) => {
        console.log("THEO PHIM>>>>>>>>>>", id);
        props.actionBuyTicket(id)
    };
    return (
        <>
            <div className="follow-movie grid grid-cols-12 gap-8">
                <div className="select-movie col-span-12 md:col-span-4">
                    <h2 className="p-2 font-semibold text-xl text-center bg-orange-500 text-white">Chọn Phim</h2>
                    <div className='md:overflow-hidden md:h-auto overflow-y-auto h-48'>
                        {
                            movieShowing && movieShowing.map((value, index) => <div className={`${chooseMovie==value.id ? `bg-zinc-200` : undefined} ${chooseMovie==value.id ? "pointer-events-none" :undefined} `} key={index}>
                                <ItemListMoive value={value} onClick={() => { setSelectCard({slug:value.slug, age: value.age, ImagePortrait:value.imagePortrait, ImageLandscape:value.imageLandscape,duration:value.duration,FilmName:value.name }) ; console.log(value); handleUpdate(value.id); setChooseMovie(value.id);setChooseCimena("")}} />
                            </div>)
                        }
                    </div>
                </div>

                <div className="select-cinema col-span-12 md:col-span-4">
                    <h2 className="p-2 font-semibold text-xl text-center bg-orange-500 text-white">Chọn Rạp</h2>
                    <div className='md:overflow-hidden md:h-auto overflow-y-auto h-48'>
                        {
                            buyTicket.length === 0
                                ? <div className='border-b-2 border-r-2 border-l-2 border-solid border-zinc-200 py-5 px-2.5'>{"Vui lòng chọn phim"}</div>
                                : buyTicket?.map((valueCinema, index) => <div key={index} className={`${chooseCimena === valueCinema.id ? "bg-zinc-200" :"cursor-pointer"} ${ chooseCimena==valueCinema.id?`pointer-events-none`:undefined}`} >
                                    <ItemListCinema valueCinema={valueCinema} onClick={() => { setSelectCinema({
                                        inforCimena: {
                                            CinemaName:valueCinema.name,
                                        },
                                        dates:valueCinema.dates
                                    }); setChooseCimena(valueCinema.id)}} />
                                </div>)
                        }
                    </div>
                </div>

                <div className="select-time col-span-12 md:col-span-4">
                    <h2 className="p-2 font-semibold text-xl text-center bg-orange-500 text-white">Chọn Suất</h2>
                    <div className='md:overflow-hidden md:h-auto overflow-y-auto h-48'>
                        {
                            selectCinema.dates.length === 0
                                ? <div className='border-b-2 border-r-2 border-l-2 border-solid border-zinc-200 py-5 px-2.5'>{"Vui lòng chọn suất"}</div>
                                : selectCinema.dates?.map((valueTime, index) => <div key={index}>
                                    <ItemListSession valueCinemaAndMovie={{
                                        ...selectCinema.inforCimena,
                                        ...selectCard
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
        movieShowing: state.storeMovieManage.movieShowing,
        buyTicket: state.buyTicketsManage.buyTicket
    }
});

const mapDispatchToProps = (dispatch) => ({
    actionGetDataSoonAndNowMoive: () => {
        dispatch({ type: "GET_DATA/StoreMovie" })
    },
    actionBuyTicket: (id) => {
        dispatch({ type: "GET_DATA/buyTicket", payload: id })
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowMovie);