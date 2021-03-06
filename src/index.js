import React from 'react';
import ReactDOM from 'react-dom';
import '@/style/main.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'store/index'

import * as serviceWorker from './serviceWorker';


const store = configureStore()


// react-redux提供Provider，把所有代码包裹起来
ReactDOM.render( 
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root') 
);

// 热更新，上面的代码本身已经有了，加下面的代码即可
if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root'),
        )
    })
}

// if (module.hot) {
//     module.hot.accept('./App', () => {
//         ReactDOM.render(<App />, document.getElementById('root'))
//     })
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
