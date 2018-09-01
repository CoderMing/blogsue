import Component from './UserSection.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import _config from '../../config'

function updateUserInfo(info) {
  return { type: 'UPDATE_USER_INFO', info }
}
function changePageColor(isDarkMode) {
  _config.pageConfApi.set({ isDarkMode: isDarkMode })
  return { type: 'CHANGE_PAGE_COLOR', isDarkMode }
}

function mapStateToProps(state) {
  return {
    userInfo: state.user.info,
    isDark: state.page.isDark
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUserInfo, changePageColor }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
