import { CHANGE_PAGE_COLOR } from '../common/constant'

const initialState = {
  isDark: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE_COLOR:
      return {
        ...state,
        isDark: action.isDarkMode
      }

    default:
      return state
  }
}
