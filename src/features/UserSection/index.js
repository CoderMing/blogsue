import Component from './UserSection'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function updateUserInfo(info) {
  return { type: 'UPDATE_USER_INFO', info }
}

function mapStateToProps(state) {
  return {
    // userInfo: state.user.info
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUserInfo }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
