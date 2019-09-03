
const defaultState = {
    userInfo: localStorage.getItem('userinfo'),
    token: localStorage.getItem('token'),
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            localStorage.setItem('token', action.data)
            return {
                ...defaultState,
                token: action.data
            }
        case 'SET_USERINFO':
            localStorage.setItem('userinfo', JSON.stringify(action.data))
            return {
                ...defaultState,
                userInfo: action.data
            }
        case 'LOGOUT':
            localStorage.removeItem('userinfo')
            localStorage.removeItem('token')
            return {
                ...defaultState,
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

