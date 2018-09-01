import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export default compose(applyMiddleware(...middlewares))(createStore)
