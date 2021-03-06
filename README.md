## api文档手动编写项目

#### 预览地址：http://blog-doc.golang365.com
#### 后端api（laravel）: https://github.com/sweida/apidoc

管理员多个几个权限，因为老是有人将 admin 账号（有管理员权限）搞事情，所以冻结该账号了，自己用github授权登录吧
![项目预览](http://static.golang365.com/nZFs9CxCHBSmZGlFDOXcWtDXfeDdh9FwFVk37yPv.png)
![项目预览](http://static.golang365.com/C3zHE0DkWqZ1dHzy7KP2GEz6V6Pg2BYgBwZtONm2.png)

可以生成模版
![项目预览](http://static.golang365.com/kt2gIjCIFaLKM8hrX2wM7qJwzO4Lh78ajcVFYmYw.png)

做了几个小工具
![项目预览](http://static.golang365.com/T41PocO4MSNxRrKxp8y3h046fESj59EJq4jVEKFW.png)


## 开发过程

### 安装路由
```
yarn add react-router-dom
```
引用
```js
import { BrowerRouter, Roure, Link } from "react-router-dom"

// exact 去掉重复/路径
<Route key={index} path='/' exact compoent={app} />


// to为string
<Link to="/about">关于</Link>
 
// to为obj
<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}/>

```

### 安装api请求
```
yarn add whatwg-fetch
```

### map配置路由
### 重定向和路由拦截

### 安装 redux
```
yarn add redux react-redux
```
```js
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";

...
const store = createStore( reducer )

ReactDOM.render( 
    <Provider store={ store }>
        <App />, 
    </Provider>,
    document.getElementById('root') 
);
```

### 安装 开发工具
```
yarn add redux-logger redux-devtools-extension
```
```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
 
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware),
     // other store enhancers if any
));
```

### 未完成功能

- [ ] 分页
- [x] 编辑api
- [x] 已删除的api
- [x] 个人api
- [x] 自动更新删除列表

- [ ] 图片没打包，
- [ ] 部署后内页css引用地址不对
- [x] 打包后去掉.map文件

token， user需要实时更新

最后一个问题，redux数据保存到loaclstroage

### 存在的问题
2、部署后，项目详情页刷新会报css路径不对
3、有管理员权限的页面刷新后会跳转到`projects`
