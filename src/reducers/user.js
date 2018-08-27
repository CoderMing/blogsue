import { UPDATE_USER_INFO } from '../common/constant'

const initialState = {
  info: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        info: action.info
      }

    default:
      return state
  }
}
