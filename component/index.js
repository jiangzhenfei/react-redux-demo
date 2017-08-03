import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './card.js'
import Dialog from './dialog.js'
import List from './list.js'

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="g-index">
                <Card />
                <Dialog />
                <button onClick={this.props.changeName}>点击换名字</button>
                <button onClick={this.props.showDialog}>点击显示模态框</button>
                <List />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        changeName () {
            setTimeout(function(){  //模拟后台数据的异步返回
                dispatch({
                    type: 'CHANGE_NAME',
                    name: '葬爱'
                })
            },2000)
            
        },
        showDialog () {
            dispatch({
                type: 'SHOW_DIALOG'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
