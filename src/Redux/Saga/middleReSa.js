import { call, put, takeEvery } from "redux-saga/effects"


const callApiStoreMovie = async () => {
    const res = await fetch("https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/nowAndSoon", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const dataStoreMoive = await res.json()
    return dataStoreMoive
}

const callApiAllCinema = async () => {
    const res = await fetch("https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/cinemas", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data
}


const callApiCinemaDetail = async (code) => {
    const res = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/cinemas/${code}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()

    return data
}


const callApiCinema = async (id) => {
    const res = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/movie/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data
}

// const callApiBooking = async () => {
//     const res = await fetch("https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/booking/detail", {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//     const data = await res.json()
//     return data
// }

const callApiCalenderMovieSlug = async (slug) => {
    const resMovie = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/movieBySlug/${slug}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const dataMovie = await resMovie.json()
    const resCalender = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/movie/${dataMovie.id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const dataCalender = await resCalender.json()
    return {
        movieDetail: dataMovie,
        calenderMovie: dataCalender
    }
}
// const callApiCalenderMovieId = async (id) => {
//     const resCalender = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/movie/${dataMovie.id}`, {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//     const dataCalender = await resCalender.json()
//     return {
//         movieDetail: dataMovie,
//         calenderMovies: dataCalender
//     }
// }

const callApiCityAndCimena = async () => {
    const resAllCity = await fetch("https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/city", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const dataAllCity = await resAllCity.json()
    const resAllCimena = await fetch("https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/cinemas", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    const dataAllCimena = await resAllCimena.json()

    const map = new Map()
    dataAllCimena.forEach(v => {
        map.set(v.cityId, v.cityId)

    });
    const listCityId = Array.from(map.keys())
    const dataCityIdInCimena = dataAllCity.filter((city) => {
        return listCityId.includes(city.id)
    })
    return {
        cinema: dataAllCimena, city: dataCityIdInCimena
    }

}

const callApiAllBooking = async (cinemaIdAnSessionId) => {
    const resSeatsCinema = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/booking/detail`)
    const dataSeatsCinema = await resSeatsCinema.json()
    const resSeatsBooked = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/TicketByShowCode/${cinemaIdAnSessionId.cinemaId}-${cinemaIdAnSessionId.sessionId}`)
    const dataSeatsBooked = await resSeatsBooked.json()
    const flatArray = dataSeatsBooked.reduce((previous, current) => {
        return [...previous, ...current.SeatCode.split(",")]
    }, [])

    return {
        dataBookingAll: dataSeatsCinema,
        dataSeatsBooked: flatArray
    }
}

const callApiPostDataPayingNormal = async (payload) => {
    const res = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/Ticket`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)

    })
    if (res.status == 200) {
        return true
    }
    else return false

}

function* hanleGetDataStoreMovie() {
    const dataStoreMoive = yield call(callApiStoreMovie)
    yield put({
        type: "SET_DATA/StoreMovie",
        payload: dataStoreMoive
    })
}

// function* hanleGetDataCalenderMoiveId({payload }) {
//     const dataMovieDetailPage = yield call(callApiCalenderMovieId, payload)
//     yield put({
//         type:"GET_DATA/CalenderMoiveId",
//         payload: dataMovieDetailPage
//     })
// }
function* hanleGetDataCalenderMoiveSlug({ payload }) {
    const dataMovieDetailAndCalender = yield call(callApiCalenderMovieSlug, payload)
    yield put({
        type: "SET_DATA/CalenderMoiveSlug",
        payload: dataMovieDetailAndCalender
    })
}

// function* hanleGetDataBooking() {
//     const data = yield call(callApiBooking)
//     // console.log(data);
//     yield put({
//         type: "SET_DATA/booking",
//         payload: data
//     })
// }
// 

function* handleGetDataCityAndCimena() {
    const data = yield call(callApiCityAndCimena)
    yield put({
        type: "SET_DATA/CityAndCinema",
        payload: data
    })
}

function* handleGetDataCinema({ type, payload }) {
    const data = yield call(callApiCinema, payload)
    yield put({
        type: "SET_DATA/buyTicket",
        payload: data
    })
}


function* handleGetDataAllBooking({ type, payload }) {
    const data = yield call(callApiAllBooking, payload)
    console.log(">>>>>>>>>> trong handle All data", { ...data, ...payload });

    yield put({
        type: "SET_DATA/dataAllBooking",
        payload: {
            ...data,
            ...payload
        }
    })
}

function* handleGetDataAllCinema() {
    const data = yield call(callApiAllCinema)
    yield put({
        type: "SET_DATA/AllCinema",
        payload: data
    })
}

function* handleGetDataCinemaDetail({ type, payload }) {
    const data = yield call(callApiCinemaDetail, payload)
    yield put({
        type: "SET_DATA/CinemaDetail",
        payload: data
    })
}


function* handlePostDataPayingNormal({ type, payload }) {
    const data = yield call(callApiPostDataPayingNormal, payload)
    yield put({
        type: "SET_DATA/Toggle_sucess",
        payload: data
    })
}



function* middleReSa() {
    yield takeEvery("GET_DATA/StoreMovie", hanleGetDataStoreMovie)
    // yield takeEvery("GET_DATA/booking", hanleGetDataBooking)
    yield takeEvery("GET_DATA/CalenderMoiveSlug", hanleGetDataCalenderMoiveSlug)
    // yield takeEvery("GET_DATA/CalenderMoiveId", hanleGetDataCalenderMoiveId)
    yield takeEvery("GET_DATA/CityAndCinema", handleGetDataCityAndCimena)
    yield takeEvery("GET_DATA/buyTicket", handleGetDataCinema)
    yield takeEvery("GET_DATA/dataAllBooking", handleGetDataAllBooking)
    yield takeEvery("GET_DATA/AllCinema", handleGetDataAllCinema)
    yield takeEvery("GET_DATA/CinemaDetail", handleGetDataCinemaDetail)
    yield takeEvery("POST_DATA/PayingNormal", handlePostDataPayingNormal)
}

export default middleReSa;