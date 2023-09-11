import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxSaga from 'redux-saga';
import middleReSa from './Saga/middleReSa';
import rdcStoreMovie from './Reducer/rdcStoreMovie';
import rdcStoreBuyTicket from "./Reducer/rdcBuyTicketPage";
import rdcModalLogin from "./Reducer/rdcModalLogin";
import rdcCityAndCinema from "./Reducer/rdcCityAndCinema";
import rdcAllCinema from "./Reducer/rdcAllCinema";
import rdcMovieDetailPage from "./Reducer/rdcMovieDetailPage";
import rdcBookingPage from "./Reducer/rdcBookingPage";
import rdcModalPaySucess from "./Reducer/rdcModalPaySucess";

const middleWare = reduxSaga();
const globalState = combineReducers({
    storeMovieManage: rdcStoreMovie,
    movieDetailPageManage: rdcMovieDetailPage,
    cityAndCinemaManage: rdcCityAndCinema,
    allCinemaManage: rdcAllCinema,
    bookingPageManage: rdcBookingPage,
    modalPaySucessManage: rdcModalPaySucess,
    modalLoginManage: rdcModalLogin,
    buyTicketsManage: rdcStoreBuyTicket,
});

const store = createStore(globalState, applyMiddleware(middleWare));
export default store;

middleWare.run(middleReSa);