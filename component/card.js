import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="m-card">
                <div>
                  姓名：{this.props.name}
                </div>
                <div>
                  照片：<img src={this.props.picture} alt="" />
                </div>
            </div>
        )
    }
}

Card.PropTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    
}

function mapStateToProps(state) {
  var info = state.card

  return {
    name: info.name,
    picture: info.picture
  }
}

export default connect(mapStateToProps)(Card)
