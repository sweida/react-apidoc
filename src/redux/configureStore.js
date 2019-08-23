
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

// rootReducer即所有reducers
const configureStore = () => {
    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(logger, thunk)
    ))

    //上面的代码已经有的，加if里面的即可
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

