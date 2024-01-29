const initialState = {
    jsonData : [],
}
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case "JSON_DATA":
            return {
                ...state,
                jsonData : [action.payload]
            }
        default:
            return state;
    }
}

export default reducer;