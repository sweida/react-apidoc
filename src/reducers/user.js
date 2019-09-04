
const defaultState = {
    userInfo: localStorage.getItem('userInfo'),
    token: localStorage.getItem('token'),
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            localStorage.setItem('token', action.data)
            return {
                ...state,
                token: action.data
            }
        case 'SET_USERINFO':
            localStorage.setItem('userInfo', JSON.stringify(action.data))
            return {
                ...state,
                userInfo: action.data
            }
        case 'LOGOUT':
            localStorage.removeItem('userInfo')
            localStorage.removeItem('token')
            return {
                ...state,
                userInfo: null,
                token: null
            }
        default:
            return state;
    }
}

// const user = (state = defaultState, action) => {
//     switch (action.type) {
//         case SET_TOKEN:
//             const newState = JSON.parse(JSON.stringify(defaultState))
//             newState.token = action.data
//             return newState
//         default:
//             return state;
//     }
// }


export default user;

