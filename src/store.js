import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import mediumReducer from './ducks/mediumReducer'
import reducer from './ducks/hackerNewsReducer'

const rootReducer = combineReducers({
    hackerNews: reducer,
    medium: mediumReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))