import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

const middlewares = [
  logger()
]

// Ques: compose第二个参数作用？
export default compose(
  applyMiddleware(...middlewares),
  f => f
)(createStore)