const initialState = {
    users : [],
    inputText : '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INPUT_TEXT":
            return {
                ...state,
                users : [...state.users,state.inputText]
            }
        case "INPUT_VALUE":
            return {
                ...state,
                inputText : [action.payload]
            }
        default:
            return state;
    }
}

export default reducer;