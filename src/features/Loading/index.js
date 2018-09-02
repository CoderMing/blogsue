import Component from './Loading.jsx'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    loadingState: state.page.loadingState
  }
}

export default connect(mapStateToProps)(Component)
