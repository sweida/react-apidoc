import req from './fetch'
// let beasUrl = " http://127.0.0.1:8080/api/v2/"

// 注册
export const register = (data) => {
    return req.post("/signup", data).then(res => res.json())
}

// 新增项目
export const addProject = (data) => {
    return req.post("/project/add", data).then(res => res.json())
}

// 项目列表
export const projectList = () => {
    return req.post("/project/list").then(res => res.json())
}

// api列表
export const apiList = (data) => {
    return req.post("/apidoc/list", data).then(res => res.json())
}

// 新增api
export const addapi = (data) => {
    return req.post("/apidoc/add", data).then(res => res.json())
}

export const login = (data) => {
    return req.post("/login", data).then(res => res.json())
}

export const logout = (data) => {
    return req.post("/logout", data).then(res => res.json())
}

// 个人信息
export const userInfo = (data) => {
    return req.get("/user/info", data).then(res => res.json())
}

// 修改密码
export const resetpassword = (data) => {
    return req.post("/user/resetpassword", data).then(res => res.json())
}