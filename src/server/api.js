import req from './fetch'
// let beasUrl = " http://127.0.0.1:8080/api/v2/"

const apidocs = () => {
    return req.get("apidoc/list").then(res => res.json())
}
export { apidocs }