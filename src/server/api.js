import http from './http'
// let beasUrl = " http://127.0.0.1:8080/api/v2/"

// 注册
export const register = (data) => {
    return http.post("/apis/signup", data).then()
}

// 新增项目
export const addProject = (data) => {
    return http.post("/apis/project/add", data).then()
}

// 项目列表
export const projectList = () => {
    return http.post("/apis/project/list").then()
}

// api列表
export const apiList = (data) => {
    return http.post("/apis/apidoc/list", data).then()
}

// 新增api
export const addApi = (data) => {
    return http.post("/apis/apidoc/add", data).then()
}

// 删除api
export const deleteApi = (data) => {
    return http.post("/apis/apidoc/delete", data).then()
}

// 删除的api列表
export const deleteList = (data) => {
    return http.post("/apis/apidoc/deleteList", data).then()
}

// 恢复删除
export const restored = (data) => {
    return http.post("/apis/apidoc/restored", data).then()
}

// 编辑api
export const editApi = (data) => {
    return http.post("/apis/apidoc/edit", data).then()
}

export const login = (data) => {
    return http.post("/apis/login", data).then()
}

export const logout = (data) => {
    return http.post("/apis/logout", data).then()
}

// 个人信息
export const userInfo = (data) => {
    return http.get("/apis/user/info", data).then()
}

// 个人添加的api
export const personApi = () => {
    return http.get("/apis/apidoc/person").then()
}

// 修改密码
export const resetpassword = (data) => {
    return http.post("/apis/user/resetpassword", data).then()
}


// 链接模块
export const addLink = (data) => {
    return http.post("/apis/link/add", data).then()
}
export const editLink = (data) => {
    return http.post("/apis/link/edit", data).then()
}
export const deleteLink = (data) => {
    return http.post("/apis/link/delete", data).then()
}
export const linkList = (data) => {
    return http.post("/apis/link/list", data).then()
}

// 获取营业执照
export const getBusiness = (data) => {
    return http.post("/apis/business/list", data).then();
}