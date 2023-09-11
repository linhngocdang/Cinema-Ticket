const initialState = {
    city: undefined,// cac thanh pho co rap galaxy
    cinema: undefined // cac rap phim galaxy
  }
  
const rdcCityAndCinema = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_DATA/CityAndCinema":
        return { ...state, ...payload }
  
      default:
        return state
    }
  }

  export default rdcCityAndCinema;