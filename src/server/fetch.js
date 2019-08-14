import 'whatwg-fetch'

export default {
    post(url, data) {
        return fetch(url,
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data),// data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json',
                    // 'accesstoken': sessionStorage.getItem('token')
                }
            }
        )
    },
    get(url, params) {
        //get带参数请求，需要将数据拼接在url中
        if (params) {
            let paramsArray = []
            // console.log(Object.keys(params)) //输出Array 数组
            Object.keys(params).forEach(key => {  //枚举属性,返回值去循环
                // console.log(key)//输出 tab
                paramsArray.push(key + '=' + params[key])
            })
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return fetch(url)
    }
}