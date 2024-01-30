const initialState = {
    loginData : [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_DATA":
            return {
                ...state,
                loginData : [action.payload],
            }
        default :
            return state;
    }
}

export default reducer;