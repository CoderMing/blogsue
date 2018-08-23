import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

const middlewares = [
  logger
]

// Ques: compose第二个参数作用？
// Ans: 无作用，原因为我未理解compose的内容
export default compose(
  applyMiddleware(...middlewares)
)(createStore)