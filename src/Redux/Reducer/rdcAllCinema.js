const initialState = {
    allCinema: undefined,
    cinemaDetails: [],
  }
const rdcAllCinema = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_DATA/AllCinema":
        return { ...state, allCinema:payload }
      case "SET_DATA/CinemaDetail":
        return { ...state, cinemaDetails:payload }
    default:
      return state
    }
  }
export default rdcAllCinema;