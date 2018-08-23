import { combineReducers } from 'redux' // 利用combineReducers 合并reducers

export default combineReducers({
  sample: (store = {}) => store
})