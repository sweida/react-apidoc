import req from './fetch'
// let beasUrl = " http://127.0.0.1:8080/api/v2/"

// 注册
export const register = (data) => {
    return req.post("/signup", data).then()
}

// 新增项目
export const addProject = (data) => {
    return req.post("/project/add", data).then()
}

// 项目列表
export const projectList = () => {
    return req.post("/project/list").then()
}

// api列表
export const apiList = (data) => {
    return req.post("/apidoc/list", data).then()
}

// 新增api
export const addApi = (data) => {
    return req.post("/apidoc/add", data).then()
}

// 删除api
export const deleteApi = (data) => {
    return req.post("/apidoc/delete", data).then()
}

// 删除的api列表
export const deleteList = (data) => {
    return req.post("/apidoc/deleteList", data).then()
}

// 恢复删除
export const restored = (data) => {
    return req.post("/apidoc/restored", data).then()
}

// 编辑api
export const editApi = (data) => {
    return req.post("/apidoc/edit", data).then()
}

export const login = (data) => {
    return req.post("/login", data).then()
}

export const logout = (data) => {
    return req.post("/logout", data).then()
}

// 个人信息
export const userInfo = (data) => {
    return req.get("/user/info", data).then()
}

// 个人添加的api
export const personApi = () => {
    return req.get("/apidoc/person").then()
}

// 修改密码
export const resetpassword = (data) => {
    return req.post("/user/resetpassword", data).then()
}