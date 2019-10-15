import { apiList } from "server/api";

export const setApiList = (data) => ({
    type: 'SET_APILIST',
    data
})

export const getApiList = (params) => async dispatch => {
    const res = await apiList(params)
    if (res.status == 'success') {
        dispatch(setApiList(res.data.data));
    }
    return Promise.resolve(res);
}

