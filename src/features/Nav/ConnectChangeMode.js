import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ChangeMode from './ChangeMode'

import _config from '../../config'

function changePageColor(isDarkMode) {
  _config.pageConfApi.set({
    isDarkMode: isDarkMode
  })
  return {
    type: 'CHANGE_PAGE_COLOR',
    isDarkMode
  }
}

function mapStateToProps(state) {
  return {
    isDark: state.page.isDark
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changePageColor }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeMode)
