function Reducer(state = [], action) {
    switch (action.type) {
        case 'set-userid': {
            return {
                ...state,
                userId: action.id
            }
        }
        default:
            return state
    }
}

export default Reducer;