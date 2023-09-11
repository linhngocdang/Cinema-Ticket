const initialState = {
  buyTicket: []
}

const rdcStoreBuyTicket = (state = initialState, { type, payload }) => {
  switch (type) {

    case "SET_DATA/buyTicket":
      // console.log(">>>>>>>>>>>>>>>>>>>>reducer", payload);
      return { ...state, buyTicket: payload }

    default:
      return state
  }
}
export default rdcStoreBuyTicket;