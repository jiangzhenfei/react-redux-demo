import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Dialog  extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.status) {
            return null
        }
        return (
             <div className="m-dialog">
                <div>
                    dialog
                </div>
                <button onClick={this.props.hideDialog}>close</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
  var info = state.dialog

  return {
    status: info.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideDialog () {
      dispatch({
        type: 'CLOSE_DIALOG'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
