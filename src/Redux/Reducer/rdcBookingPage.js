const initialState = {

  cinemaId:undefined,
  sessionId:undefined,
    process:0,
    dataBookingAll:{},
    dataSeatsBooked:[],
    comboUserBooking:{},
    dataBookingUserInfor:{
      CinemaName: undefined,
      TheaterName: undefined,
      FilmName: undefined,
      ImageLandscape: undefined,
      ImagePortrait: undefined,
      ShowTime: undefined,
      ShowDate:undefined,
      seatsChoosed: {
        couple: [], //array contain obj
        standard: [] //array contain obj
    },
  
    payBank: {}

      }
      
    // }
}

const rdcBookingPage= (state = initialState, { type, payload }) => {
  switch (type) {

  case "SET_DATA/dataAllBooking":
    const seats=payload.dataBookingAll.ticket.
    reduce((previousValue, currentValue) =>({...previousValue,[`${currentValue.areaCategoryCode}${currentValue.onlyMember}`]:{
      name:currentValue.name,
      areaCategoryCode:currentValue.areaCategoryCode,
      displayPrice:currentValue.displayPrice,
      onlyMember:currentValue.onlyMember,
      description:currentValue.description,
      listSeatsChoosed: []
    }})
    , {})
    const combo=payload.dataBookingAll.consession[0].concessionItems
    .reduce((previousValue, currentValue) => ({
      ...previousValue, [currentValue.id]:{...currentValue, number: 0}
    }), {})
    return {...state, ...payload ,seatsUserBooking:seats,comboUserBooking:combo}

  case "GET_DATA/dataBookingUserInfor":
    return {...state,dataBookingUserInfor:{...state.dataBookingUserInfor,...payload} }

case "SET_DATA/ChooseSeatCouple":
    console.log(">>>>>>. đã có");
    if(state.dataBookingUserInfor.seatsChoosed.couple.includes(payload)){
      const arrayNew=[...state.dataBookingUserInfor.seatsChoosed.couple].filter(v=>v!=payload)
      return {...state, dataBookingUserInfor:{...state.dataBookingUserInfor, seatsChoosed:{...state.dataBookingUserInfor.seatsChoosed,couple:arrayNew}} }
    }
    else{
      console.log(">>>>>>. chưa có");
      const arrayNew=[...state.dataBookingUserInfor.seatsChoosed.couple, payload]
      return {...state, dataBookingUserInfor:{...state.dataBookingUserInfor, seatsChoosed:{...state.dataBookingUserInfor.seatsChoosed,couple:arrayNew}} }
    }
    
  case "SET_DATA/ChooseSeatStandard":
      if(state.dataBookingUserInfor.seatsChoosed.standard.includes(payload)){
        console.log("rdc Ghế",payload);
        const arrayNew2=[...state.dataBookingUserInfor.seatsChoosed.standard].filter(v=>v!=payload)
        return {...state, dataBookingUserInfor:{...state.dataBookingUserInfor, seatsChoosed:{...state.dataBookingUserInfor.seatsChoosed,standard:arrayNew2}} }
      }
      else{
        const arrayNew1=[...state.dataBookingUserInfor.seatsChoosed.standard, payload]
        return {...state, dataBookingUserInfor:{...state.dataBookingUserInfor, seatsChoosed:{...state.dataBookingUserInfor.seatsChoosed,standard:arrayNew1}} }
      }
  
  case "SET_DATA/actionComboIncrease":
    const numberCount=state.comboUserBooking[payload].number+1
    return {...state,comboUserBooking:{...state.comboUserBooking,[payload]:{...state.comboUserBooking[payload],number:numberCount }}}

  case "SET_DATA/actionComboDecrease":
    const numberCountD=state.comboUserBooking[payload].number-1
    return {...state,comboUserBooking:{...state.comboUserBooking,[payload]:{...state.comboUserBooking[payload],number:numberCountD }}}
  case "SET_DATA/resetBookingPage":
    return{
    cinemaId:undefined,
    sessionId:undefined,
    process:0,
    dataBookingAll:{},
    dataSeatsBooked:[],
    comboUserBooking:{},
    dataBookingUserInfor:{
      CinemaName: undefined,
      TheaterName: undefined,
      FilmName: undefined,
      ImageLandscape: undefined,
      ImagePortrait: undefined,
      ShowTime: undefined,
      ShowDate:undefined,
      seatsChoosed: {
        couple: [], //array contain obj
        standard: [] //array contain obj
    },
  
    payBank: {}

      }
    }
  default:
    return state
  }
}
export default rdcBookingPage