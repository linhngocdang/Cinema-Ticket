const initialLogin = {
    toggleLogin: false,
};

const rdcModalLogin = (state = initialLogin, { type, payload }) => {
    switch (type) {
        case 'TOGGLE_LOGIN':
            return !state
        default:
            return state;
    }
}
export default rdcModalLogin;