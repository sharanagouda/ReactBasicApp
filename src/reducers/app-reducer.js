const initialState = { 
    loggedIn: true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                loggedIn: true
            }
        case "LOGOUT":
            return {
                ...state,
                loggedIn: false
            }    
        default:
            return state;
    }
}