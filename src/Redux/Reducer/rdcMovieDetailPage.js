import dateFormat from 'dateformat';

const initialState = {
    movieDetail:{},
    calenderMovie:[],
    dateStart: new Date().valueOf(),
    calenderAvailabilityFull:[],
    calenderAvailabilityForDate:[]
 
  }

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case "SET_DATA/CalenderMoiveSlug":
      
      const listDate=payload.calenderMovie?.map((cinema)=>cinema.dates.map((date)=>({showDate:date.showDate, cinemaId: cinema.id,cityId: cinema.cityId, number:new Date(date.showDate.split("/").reverse().join("-")).valueOf()}))).flat();
      if(listDate.length){
        const numberDate=new Date(Math.min(...listDate.map(v=>v.number)))
        const dateStart=dateFormat(numberDate,"dd/mm/yyyy") ;
        const filterDate=listDate.filter((item) =>item.showDate==dateStart)
        return { 
          ...state, ...payload,
          calenderAvailabilityFull:listDate,dateStart:numberDate, calenderAvailabilityForDate:filterDate};
      }
      else{ 
        return { ...state, ...payload, calenderAvailabilityFull:[]};
      }
      
  case "SET_DATA/FilterMovieDetailPage":
    const listDateAvailability=state.calenderAvailabilityFull.filter((item) =>item.showDate==dateFormat(new Date(payload), "dd/mm/yyyy"))
    return { ...state, ...payload, calenderAvailabilityForDate:listDateAvailability};
  case "RESET_DATA/MovieDetailPage":
    return { movieDetail:{},
    calenderMovie:[],
    dateStart: new Date().valueOf(),
    calenderAvailabilityFull:[],
    calenderAvailabilityForDate:[]}

  default:
    return state
  }
}
