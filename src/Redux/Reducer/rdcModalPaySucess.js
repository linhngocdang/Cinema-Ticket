const initialMailLogin = {
    isSucess:false
}

const rdcModalPaySucess = (state = initialMailLogin, { type, payload }) => {
    switch (type) {
        case "SET_DATA/Toggle_sucess":
            return {isSucess: !state.isSucess}
        default:
            return state;
    }
}
export default rdcModalPaySucess;