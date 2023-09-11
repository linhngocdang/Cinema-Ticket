import dateFormat from 'dateformat';

const today= new Date().valueOf()

const initialState = {
  movieCommingSoon: undefined,
  movieShowing: undefined,
}

const rdcStoreMovie = (state = initialState, { type, payload }) => {
  switch (type) {

    case "SET_DATA/StoreMovie":
      // console.log(">>>>> rdcStoreMovie");
      return { ...state, ...payload }
  default:
    return state
  }
}
export default rdcStoreMovie