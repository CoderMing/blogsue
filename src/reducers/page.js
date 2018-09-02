import { CHANGE_PAGE_COLOR, CHANGE_LOADING_STATE } from '../common/constant'

const initialState = {
  isDark: false,
  loadingState: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE_COLOR:
      return {
        ...state,
        isDark: action.isDarkMode
      }

    case CHANGE_LOADING_STATE:
      return {
        ...state,
        loadingState: action.loadingState
      }

    default:
      return state
  }
}
