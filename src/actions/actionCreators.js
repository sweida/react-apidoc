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

export const setApiList = (data) => ({
    type: 'SET_APILIST',
    data
})

// 登录信息
export const loginAction = (params) => async dispatch => {
    const res = await login(params)
    if (res.status == 'success') {
        dispatch(setToken(res.data.token))
    }
    return Promise.resolve(res);
}


// 使用异步的例子
export const getUserInfo = () => async dispatch => {
    const res = await userInfo()
    if (res.status == "success") {
        dispatch(setUserInfo(res.data));
    }
    return Promise.resolve(res)
}



// 不用异步的例子
export const getApiList = (params) => dispatch => {
    return apiList(params).then(res => {
        if (res.status == "success") {
            dispatch(setApiList(res.data.data));
        }
        return Promise.resolve(res);
    });
};