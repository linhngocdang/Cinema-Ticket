import React, { useState } from "react";
import "./BuyTicked.scss";
// import Search from "../../Components/Search/Search";
import FollowMovie from "../../Components/FollowMovie/FollowMovie";
import FollowCinema from "../../Components/FollowCinema/FollowCinema";
import { useEffect } from "react";
import { connect } from "react-redux";

const BuyTicked = (props) => {
  useEffect(()=>{
    props.actionResetBookingPage()

  },[])
  const [choose, setChoose] = useState(true)
 
  return (
    <div className="mx-5 md:mx-0">
      <div className="xl:max-w-7xl mx-auto">
        <nav className="h-10 my-10">
          <button onClick={()=>setChoose(true)} className={`${choose===true ?"border-b-4 border-solid border-orange-500" :""} inline-block text-xl md:text-2xl font-semibold`} >CHỌN PHIM</button>
          <button onClick={()=>setChoose(false)} className={`${choose===false ?"border-b-4 border-solid border-orange-500" :""} inline-block text-xl md:text-2xl font-semibold ml-5`}>CHỌN RẠP</button>
        </nav>
        {
          choose
            ? <FollowMovie />
            : <FollowCinema />
        }
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  actionResetBookingPage: () => dispatch({ type: "SET_DATA/resetBookingPage" })
})

export default connect(undefined, mapDispatchToProps)(BuyTicked)

