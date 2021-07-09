import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducer} from "./reducer"

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk, logger)
)

export const store = createStore(reducer, enhancer)