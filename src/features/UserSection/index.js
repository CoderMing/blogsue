import Component from './UserSection'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import _config from '../../config'

function updateUserInfo(info) {
  return { type: 'UPDATE_USER_INFO', info }
}
function changePageColor(colorMode) {
  _config.pageConfApi.set({ colorMode: colorMode })
  return { type: 'CHANGE_PAGE_COLOR', colorMode }
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
