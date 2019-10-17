import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/index'
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from 'redux-thunk'

// rootReducer即所有reducers
const configureStore = () => {
    let store = null;
    if (process.env.NODE_ENV === "development") {
        store = createStore(rootReducer, composeWithDevTools(
            applyMiddleware(logger, thunk)
        ))
    } else {
        store = createStore(rootReducer, applyMiddleware(thunk));
    }

    //热更新
    if (process.env.NODE_ENV !== "production") {
        if (module.hot) {
            module.hot.accept('../reducers', () => {
                store.replaceReducer(rootReducer)
            })
        }
    }

    return store
}

export default configureStore