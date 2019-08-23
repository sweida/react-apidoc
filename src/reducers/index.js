import { combineReducers } from "redux";

import user from "./user";


// 通过combineReducers，把多个变量合并
export default combineReducers({
    user
});

// 合并之后放到store里面