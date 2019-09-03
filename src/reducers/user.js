import { SET_TOKEN } from 'actions/actionTypes'

const defaultState = {
    userInfo: '',
    token: localStorage.getItem('token'),
}

const user = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            localStorage.setItem('token', action.data)
            return {
                ...defaultState,
                token: action.data
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

