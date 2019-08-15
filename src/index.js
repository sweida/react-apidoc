import React from 'react';
import ReactDOM from 'react-dom';
import '@/style/main.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducer from './reducers'
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(logger)
))


ReactDOM.render( 
    <Provider store={ store }>
        <App />, 
    </Provider>,
    document.getElementById('root') 
);

// if (module.hot) {
//     module.hot.accept('./App', () => {
//         ReactDOM.render(<App />, document.getElementById('root'))
//     })
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
