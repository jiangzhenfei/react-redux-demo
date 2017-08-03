import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import $ from 'jquery'
import mock1 from '../Mock/mock.js'

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var html = this.props.products.map(function(val,i) {
            return <li key={i}>{val}</li>
        })

        return (
            <div>
                <ul>
                    {html}
                </ul>
                <button onClick={this.props.change}>改变数组</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    var info = state.list

    return {
        products:info.products
    }
}

function mapDispatchToProps(dispatch) {
  return {
    change () {
        $.ajax({
            url:'http://123.com',
            dataType:'json',
            success:function(e){
                console.log(e)
                dispatch({
                    type: 'CHANGE_LIST',
                    data:e.data
                })
            }
        })
      
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)

