import { login } from 'server/api'
 

// 设置token
export const setToken = (data) => ({
    type: 'SET_TOKEN',
    data
})

export const logoutAction = () => ({
    type: 'LOGOUT',
})

export const loginAction = params => async dispatch => {
    const res = await login(params);
    if (res.status == "success") {
        dispatch(setToken(res.data.token));
    }
    return Promise.resolve(res);
};


