import { SET_TOKEN, GET_LIST } from './actionTypes'
import { login, apiList } from 'server/api'
import Alert from 'component/Alert'
import history from "router/history";

export const setToken = (data) => ({
    type: SET_TOKEN,
    data
})


// 登录信息
export const loginAction = (params) => dispatch => {
    return login(params).then(res => {
        if (res.status == 'success') {
            dispatch(setToken(res.data.token))
        }
        return Promise.resolve(res);
    })
}


export const getList = (data) => ({
    type: GET_LIST,
    data
})

export const getApiList = (params) => dispatch => {
    return apiList(params).then(res => {
        if (res.status == 'success') {
            dispatch(getList(res.data.token))
        }
        return Promise.resolve(res);
    })
}

// export const loginFun = () => {
//     return dispatch => {
        
//     }
// }