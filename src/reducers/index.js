import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import { combineReducers } from 'redux' // 利用combineReducers 合并reducers

export default combineReducers({
  routing: routerReducer
})