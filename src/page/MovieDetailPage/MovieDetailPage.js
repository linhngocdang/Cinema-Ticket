import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CartMovie from '../../Components/CartMovie/CartMovie';
import { connect } from 'react-redux';
import CartMovieDetail from './../../Components/CartMovieDetail/CartMovieDetail';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../../assets/images/logoX.png"
// import dateFormat from 'dateformat';
import Calender from './Calender/Calender';
import ReactLoading from 'react-loading';
import ListItemCinemaDetail from '../../Components/ListItemCinemaDetail/ListItemCinemaDetail';

const MovieDetailPage = (props) => {
    console.time()
    const params = useParams()
    const nav = useNavigate()
    const location = useLocation()
    const { dataMovieDetailPage, dataMovieShowing, dataCityAndCinema } = props
    const [filterCinemaId, setFilterCinemaId] = useState("")
    const [filterCityId, setFilterCityId] = useState("")

    useEffect(() => {
        if (!dataMovieShowing) {
            props.actionGetDataSoonAndNowMoive()  // PHim dng chieu
        }
        if (!dataCityAndCinema.city) {
            props.actionGetDataCityAndCinema() // 
        }
        props.actionGetDataCalenderMoiveSlug(params.slug)
        return () => props.actionResetMovieNow()
    }, [params.slug])

    const convertIdCity = dataCityAndCinema.city?.reduce((previousValue, currentValue) => {
        return { ...previousValue, [currentValue.id]: currentValue }
    }, {})
    const convertIdCinema = dataCityAndCinema.cinema?.reduce((previousValue, currentValue) => {
        return { ...previousValue, [currentValue.id]: currentValue }
    }, {})

    const getDateAvailability = (listDateAvailability, cinemaId, cityId) => {
        if (listDateAvailability.length) {
            const listDateAvailabilityFilter = listDateAvailability.filter((item) => cityId ? item.cityId == cityId : true)
                .filter((item) => cinemaId ? item.cinemaId == cinemaId : true)
            const getCity = listDateAvailability.reduce((prev, curr) => {
                if (prev.includes(curr.cityId)) { return [...prev] }
                else { return [...prev, curr.cityId] }
            }, [])
            const getCinema = listDateAvailabilityFilter.reduce((prev, curr) => {
                if (prev.includes(curr.cinemaId)) { return [...prev] }
                else { return [...prev, curr.cinemaId] }
            }, [])
            const getMovieFilter = listDateAvailabilityFilter.reduce((prev, curr) => {
                if (prev.includes(curr.cinemaId)) { return [...prev] }
                else { return [...prev, curr.cinemaId] }
            }, [])
            return { getCity, getMovieFilter, getCinema }
        }
        else {
            return { getCity: [], getMovieFilter: [], getCinema: [] }

        }
    }
    // const dataAvailability={getCity:[],getMovieFilter:[],getCinema:[]}
    const dataAvailability = getDateAvailability(dataMovieDetailPage.calenderAvailabilityForDate, filterCinemaId, filterCityId)
    // console.log(">>>>>>>>>>>>>>>,",dataAvailability);

    console.timeEnd()


    return (
        <div>
            {!Object.keys(dataMovieDetailPage.movieDetail).length ?
                <div className=' absolute z-40 top-0 bottom-0 right-0 left-0 w-full flex justify-center items-center bg-slate-700 opacity-100 '>
                    <ReactLoading type={"bubbles"} color={"rgb(234, 88, 12)"} height={"80px"} width={"80px"} />
                </div>
                :
                <div className=''>
                    {dataMovieDetailPage.movieDetail && <CartMovieDetail dataMovie={dataMovieDetailPage.movieDetail} />}
                    <section className='md:grid md:grid-cols-12 mx-auto xl:max-w-7xl md:gap-20 mt-3 md:mt-5'>
                        <div className='md:col-span-8'>
                            <section className=''>
                                <h2 id='dat-ve' className="font-medium text-xl mb-7 text-center"><span className="inline-block border-b-4 border-solid border-orange-500">LỊCH CHIẾU</span></h2>
                                <div className=''>
                                    <form className='flex flex-col items-center  border-solid border-white border py-3 md:py-5 rounded-md shadow-xl'>
                                        <div className='md:flex justify-center'>
                                            <div className='flex border-solid border-zinc-400 border rounded-md py-2 px-1'>
                                                <span className='mx-1 flex flex-center-ct text-orange-500 text-lg'><FaMapMarkerAlt /></span>
                                                <select onChange={(e) => setFilterCityId(e.target.value)} name="cityId" disabled={!dataAvailability.getCity.length} className="focus:outline-none flex-1 md:w-72">
                                                    <option value="">Toàn Quốc</option>
                                                    {dataAvailability.getCity.length && dataCityAndCinema.city
                                                        ? dataAvailability.getCity.map((city) => <option key={convertIdCity[city].id} value={convertIdCity[city].id}>{convertIdCity[city].name}</option>) : undefined}
                                                </select>
                                            </div>
                                            <div className='flex border-solid md:ml-3 border-zinc-400 border rounded-md py-2 px-1 mt-5 md:mt-0'>
                                                <span className='mx-2 flex'><img className='w-6' src={logo} alt="" /></span>
                                                <select name="cinemaId" disabled={!dataAvailability.getMovieFilter.length} onChange={(e) => setFilterCinemaId(e.target.value)} className='focus:outline-none flex-1 w-72'>
                                                    <option value="">Tất cả rạp</option>
                                                    {dataAvailability.getCinema.length && dataCityAndCinema.cinema
                                                        ? dataAvailability.getCinema.map((cimena) => <option value={convertIdCinema[cimena].id}>{convertIdCinema[cimena].name}</option>) : undefined}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='mt-4 py-2 px-1' >
                                            <Calender />
                                        </div>
                                    </form>
                                    <div className='mt-5 mx-4 md:mx-0'>
                                        {dataAvailability.getMovieFilter.length ? <ListItemCinemaDetail dataIdCinema={dataAvailability.getMovieFilter} /> : undefined}
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className='md:col-span-4 md:ml-10 md:mr-0 mr-5 ml-5 '>
                            <div className='grid grid-cols-12 gap-y-5 gap-x-8'>
                                <h1 className="font-medium text-xl mb-2 text-center mt-10 md:mt-0 col-span-12">PHIM SẮP CHIẾU</h1>
                                {
                                    dataMovieShowing && dataMovieShowing.filter((movie) => movie.slug !== dataMovieDetailPage.movieDetail?.slug).slice(0, 5).map((movie, i) => (
                                        <div key={i} className="xl:col-span-12 md:col-span-12 col-span-6">
                                            <CartMovie isHome={true} dataMovie={movie} />
                                        </div>))
                                }
                                <div className="flex justify-center col-span-12">
                                    <button onClick={() => nav('/phim-dang-chieu')} className="border-solid border-orange-500 border py-1 md:px-2 px-20 rounded-sm hover:bg-orange-500 hover:text-white hover:font-medium mb-10">Xem Thêm</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            }
        </div>
    );
}


const mapStateToProps = (state) => ({
    dataMovieDetailPage: state.movieDetailPageManage,
    dataMovieShowing: state.storeMovieManage.movieShowing,
    dataCityAndCinema: state.cityAndCinemaManage,
})

const mapDispatchToProps = (dispatch) => ({
    actionGetDataSoonAndNowMoive: () => {
        dispatch({ type: "GET_DATA/StoreMovie" })
    },
    actionGetDataCalenderMoiveSlug: (slug) => {
        dispatch({ type: "GET_DATA/CalenderMoiveSlug", payload: slug })
    },
    actionGetDataCityAndCinema: () => {
        dispatch({ type: "GET_DATA/CityAndCinema" })
    },
    actionResetMovieNow: (data) => {
        dispatch({ type: "RESET_DATA/MovieDetailPage" })
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)


//

