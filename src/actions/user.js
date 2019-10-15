import { userInfo } from "server/api";


export const setUserInfo = (data) => ({
    type: 'SET_USERINFO',
    data
})

// 获取用户信息
export const getUserInfo = () => async dispatch => {
    const res = await userInfo()
    if (res.status == "success") {
        dispatch(setUserInfo(res.data));
    }
    return Promise.resolve(res)
}