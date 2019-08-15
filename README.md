## 开发过程

### 安装路由
```
yarn add react-router-dom
```
引用
```js
import { BrowerRouter, Roure, Link } from "react-router-dom"

// exact 去掉重复/路径
<Route key={index} path='/' exact compoent={app} >
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