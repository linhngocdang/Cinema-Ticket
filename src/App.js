import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import "./App.scss"
import "./skeleton.scss"
import Footer from './Components/Footer/Footer';
import Home from './page/Home/Home';
import AreaShowMoive from './Components/AreaShowMoive/AreaShowMoive';
import MovieDetailPage from './page/MovieDetailPage/MovieDetailPage';
import BuyTicked from './page/BuyTicked/BuyTicked';
import ProcessBooking from './page/ProcessBooking/ProcessBooking';
import CreditCard from './Components/CreditCard/CreditCard';
import Member from './page/Member/Member';


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header></Header>
        <NavBar/>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/phim-sap-chieu' element={<AreaShowMoive/>}/>
          <Route path='/phim-dang-chieu' element={<AreaShowMoive/>}/>
          <Route path='/thanh-vien' element={<Member/>}/>
          <Route path='/mua-ve' element={<BuyTicked/>}></Route>
          <Route path='/booking-ticket/:slug' element={<ProcessBooking/>}></Route>
          <Route path='/dat-ve/:slug' element={<MovieDetailPage/>}></Route>
          <Route path='/thanh-toan' element={<CreditCard/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
