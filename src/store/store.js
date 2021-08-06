import {applyMiddleware, createStore} from "redux"
import {reducer} from "./reducer"
import logger from "redux-logger"
import thunk from "redux-thunk"

export const store = createStore(reducer, applyMiddleware(thunk,logger))