import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Count from './Count.jsx'

function plusOne() {
  return { type: 'PLUS' }
}

function mapStateToProps(state) {
  return {
    count: state.plus.count
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ plusOne }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Count)
