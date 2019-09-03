import { combineReducers } from "redux";

import user from "./user";
import doc from "./doc";


// 通过combineReducers，把多个变量合并
export default combineReducers({
    user,
    doc
});

// 合并之后放到store里面

// 安装thunk后就可以使用dispatch
// 想修改值只能通过dispatch一个action