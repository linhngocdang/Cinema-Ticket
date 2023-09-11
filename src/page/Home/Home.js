import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SliderShow from "../../Components/SliderShow/SliderShow";
import CartMovie from "./../../Components/CartMovie/CartMovie";
import CartPromotion from './../../Components/CartPromotion/CartPromotion';
import { connect } from "react-redux";
import { data } from "../../Components/CartPromotion/dataPromtion";
import './Home.scss'
import skeleton32 from "../../assets/images/3_2.png"

const Home = ({ storeMovie, actionGetDataSoonAndNowMoive,actionResetBookingPage }) => {
  const nav = useNavigate()
  const [isMoive, setIsMoive] = useState(0)
  const [dataSlider, setDataSlider] = useState([])
  const [listMove, setListMove] = useState([])

  useEffect(() => {
    if (!storeMovie.movieCommingSoon) {
      actionGetDataSoonAndNowMoive()
    }
    actionResetBookingPage()
    
  }, []);

  console.log(">>>>>>>>>isMovie", isMoive);

  return (
    <div className="home">
      <div className="max-w-screen-2xl mx-auto mb-5">
        <div className="">
          <SliderShow />
        </div>
      </div>
      <div className="xl:max-w-7xl md:mx-auto mx-3">
        <nav className="md:mx-1 font-medium text-lg md:text-xl">
          <span onClick={() => { if (isMoive !== 0) setIsMoive(0) }} className={`${isMoive === 0 ? "border-b-4 border-solid border-orange-500" : ""} inline-block`}>
            ĐANG CHIẾU
          </span>
          <span onClick={() => { if (isMoive !== 1) setIsMoive(1) }} className={`ml-5 ${isMoive === 1 ? "border-b-4 border-solid border-orange-500" : ""} inline-block`}>
            SẮP CHIẾU
          </span>
        </nav>
        <section className="mt-5">
          {
            !storeMovie.movieCommingSoon
              ? <div className="grid grid-cols-12 md:gap-y-5 md:gap-x-8 gap-x-1 gap-y-2 mb-3">
                {[...Array(6)].map((i) => (
                  <div key={i} className="list-cart-movie md:mx-1 xl:col-span-4 bg-black md:col-span-6 col-span-6">
                    <div className="relative">
                      <p className="global skeleton rounded-md"></p>
                      <img className="" src={skeleton32} alt="" />
                    </div>
                  </div>))}
              </div> :
              <div className=" grid grid-cols-12 md:gap-y-5 md:gap-x-8 gap-x-2 gap-y-2 mb-3">
                {isMoive
                  ? storeMovie.movieCommingSoon &&
                  storeMovie.movieCommingSoon.slice(0, 6).map((movie, i) => (
                    <div key={i} className="list-cart-movie md:mx-1 xl:col-span-4 md:col-span-6 col-span-6">
                      <CartMovie isHome={true} dataMovie={movie} className="cart-movie" />
                    </div>
                  ))

                  : storeMovie.movieShowing && storeMovie.movieShowing.slice(0, 6).map((movie, i) => (
                    <div key={i} className="list-cart-movie md:mx-1 xl:col-span-4  md:col-span-6 col-span-6">
                      <CartMovie isHome={true} dataMovie={movie} className="cart-movie" />
                    </div>)
                  )
                }
              </div>
          } 

          <div className="flex md:justify-end">
            <button className="mx-20 md:mx-0 border-solid md:flex-grow-0 flex-grow border-orange-500 border-2 py-1 px-1 md:py-2 md:px-2 md:rounded-sm rounded-lg text-orange-500 font-semibold hover:bg-orange-500 hover:text-white hover:font-medium" onClick={() => nav(isMoive == 0 ? "/phim-dang-chieu" : "/phim-sap-chieu")}>Xem Thêm</button>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="font-medium text-lg md:text-xl mb-3 "><span className="inline-block border-b-4 border-solid border-orange-500">TIN KHUYẾN MÃI</span></h2>
          <div className="grid grid-cols-12 gap-3 lg:gap-10">
            {
              data?.map((dt, i) => <div key={i} className="col-span-6 md:col-span-4 lg:col-span-3">
                <CartPromotion dtPromotion={dt} />
              </div>)
            }
          </div>
        </section>

        <section className="mt-5">
          <h2 className="font-medium text-xl mb-3"><span className="inline-block border-b-4 border-solid border-orange-500">GALAXY CINEMA</span></h2>
          <div className="md:mx-1 text-sm md:text-lg">
            <p className="mb-3"> <span onClick={() => { nav("/"); console.log(">>>>>>>"); }} className="hover:text-orange-500"><b>Galaxy Cinema </b></span> là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem,  <span onClick={() => { nav("/"); console.log(">>>>>>>"); }} className="hover:text-orange-500"><b>Galaxy Cinema </b></span> còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.</p>
            <p className="mb-3">Đến website <span className="hover:text-orange-500"><i>galaxycine.vn</i></span>, khách hàng sẽ dễ dàng tham khảo các <span className="hover:text-orange-500"><i>phim hay nhất</i></span>, <span className="hover:text-orange-500"><i>phim mới nhất</i></span> đang chiếu hoặc sắp chiếu luôn được cập nhật thường xuyên. Lịch chiếu tại tất cả hệ thống rạp chiếu phim của  <span onClick={() => { nav("/"); console.log(">>>>>>>"); }} className="hover:text-orange-500"><b>Galaxy Cinema </b></span> cũng được cập nhật đầy đủ hàng ngày hàng giờ trên <span className="hover:text-orange-500"><b>Trang chủ</b></span> .</p>
            <p className="mb-3">Từ vũ trụ điện ảnh Marvel, người hâm mộ sẽ có cuộc tái ngộ với Người Nhện qua Spider-Man: No Way Home hoặc Doctor Strange 2. Ngoài ra 007: No Time To Die, Turning Red, Minions: The Rise Of Gru..., là những tác phẩm hứa hẹn sẽ gây bùng nổ phòng vé trong thời gian tới.</p>
            <p className="mb-3">Giờ đây đặt vé tại  <span onClick={() => { nav("/"); console.log(">>>>>>>"); }} className="hover:text-orange-500"><b>Galaxy Cinema </b></span> càng thêm dễ dàng chỉ với vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, hoặc theo ngày. Sau đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành công của Galaxy Cinema. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của  <span onClick={() => { nav("/"); console.log(">>>>>>>"); }} className="hover:text-orange-500"><b>Galaxy Cinema </b></span> hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.</p>
            <p className="mb-3">Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của  <span onClick={() => { nav("/"); console.log(">>>>>>>"); }} className="hover:text-orange-500"><b>Galaxy Cinema </b></span> sẽ gửi ngay vào điện thoại và hộp mail của bạn.</p>
            <p className="mb-3">Nếu chưa quyết định sẽ xem phim mới nào, hãy tham khảo các bộ phim hay trong mục Phim Đang Chiếu cũng như Phim Sắp Chiếu tại rạp chiếu phim bằng cách vào mục Bình Luận Phim ở Góc Điện Ảnh để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, chỉ việc đặt vé bằng box Mua Vé Nhanh ngay ở đầu trang để chọn được suất chiếu và chỗ ngồi vừa ý nhất.  </p>
            <p className="mb-3"> <span onClick={() => { nav("/"); console.log(">>>>>>>"); }} className="hover:text-orange-500"><b>Galaxy Cinema </b></span> luôn có những chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như giảm giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà phim…  dành cho các khách hàng.</p>
            <p className="mb-3">Trang web galaxycine.vn còn có mục Góc Điện Ảnh - nơi lưu trữ dữ liệu về phim, diễn viên và đạo diễn, những bài viết chuyên sâu về điện ảnh, hỗ trợ người yêu phim dễ dàng hơn trong việc lựa chọn phim và bổ sung thêm kiến thức về điện ảnh cho bản thân. Ngoài ra, vào mỗi tháng,  <span onClick={() => { nav("/"); console.log(">>>>>>>"); }} className="hover:text-orange-500"><b>Galaxy Cinema </b></span> cũng giới thiệu các phim sắp chiếu hot nhất trong mục Phim Hay Tháng .</p>
            <p className="mb-3">Hiện nay,  <span onClick={() => { nav("/"); console.log(">>>>>>>"); }} className="hover:text-orange-500"><b>Galaxy Cinema </b></span> đang ngày càng phát triển hơn nữa với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của thế giới và Việt Nam nhanh chóng và sớm nhất.</p>
          </div>
        </section>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  storeMovie: state.storeMovieManage
})

const mapDispatchToProps = (dispatch) => ({
  actionGetDataSoonAndNowMoive: () => dispatch({ type: "GET_DATA/StoreMovie" }),
  actionResetBookingPage: () => dispatch({ type: "SET_DATA/resetBookingPage" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
