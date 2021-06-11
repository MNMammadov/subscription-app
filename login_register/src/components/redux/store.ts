import React from "react";
import { applyMiddleware, createStore } from "redux";
import { reducers } from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const middlewares = applyMiddleware(thunk, logger)
export const store = createStore(reducers, middlewares)
console.log(store)