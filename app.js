import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'

// 引入redux
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

// 引入reducer
import * as reducers from './redux/reducer.js'
import { combineReducers } from 'redux'

//引入组件
import Index from './component/index.js'

//把多个组件的reducer合成总的reducer
const reducer = combineReducers(reducers)

// 创建store，这个是整个应用唯一的
const store = createStore(reducer)

ReactDom.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
)
