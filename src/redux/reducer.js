function Reducer(state = [], action) {
    switch (action.type) {
        case 'set-userid': {
            return {
                ...state,
                userId: action.id
            }
        }
        case 'set-user-data': {
            return {
                ...state,
                userData: action.data
            }
        }
        default:
            return state
    }
}

export default Reducer;