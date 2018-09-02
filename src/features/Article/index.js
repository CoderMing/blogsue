import Component from './Article.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function changeLoadingState(loadingState) {
  return { type: 'CHANGE_LOADING_STATE', loadingState }
}

function mapStateToProps(state) {
  return {
    loadingState: state.page.loadingState
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeLoadingState }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
