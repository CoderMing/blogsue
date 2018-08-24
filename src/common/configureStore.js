import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

const middlewares = [logger]

export default compose(applyMiddleware(...middlewares))(createStore)
