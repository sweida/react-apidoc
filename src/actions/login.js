import { login } from 'server/api'

 
// export const loginAction = {
//     type: 'LOGIN'
// }

// export const userInfoAction = {
//     type: 'USERINFO'
// }

export const loginPost = (dispatch) => {
    const res = await login()
    dispatch({
        type: 'LOGIN',
        payload: {}
    })
}

export const loginPost = (data) => {
    const res = await login()
    dispatch({
        type: 'LOGIN',
        payload: data
    })
}