import { login, userInfo, apiList } from 'server/api'

export const setToken = (data) => ({
    type: 'SET_TOKEN',
    data
})

export const logoutAction = () => ({
    type: 'LOGOUT',
})

export const setUserInfo = (data) => ({
    type: 'SET_USERINFO',
    data
})

export const getList = (data) => ({
    type: 'GET_LIST',
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


// 获取用户信息
export const getUserInfo = () => dispatch => {
    return userInfo().then(res => {
        if (res.status == 'success') {
            dispatch(setUserInfo(res.data))
        }
    })
}

export const getApiList = (params) => dispatch => {
    return apiList(params).then(res => {
        if (res.status == 'success') {
            dispatch(getList(res.data.token))
        }
        return Promise.resolve(res);
    })
}
