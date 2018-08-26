import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Count extends Component {
  render() {
    const { count, plusOne } = this.props
    return (
      <div>
        <div onClick={plusOne}>{count}</div>
      </div>
    )
  }
}

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
