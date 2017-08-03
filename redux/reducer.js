var init = {
    name: 'Jack',
    picture: 'box.png'
}
var init2 = {
    status: false
}
export function card(state = init, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
        return {
            name: action.name, // 使用action携带的新name
            picture: state.picture  // 不需要修改，使用旧state的值
        }

        default:
        return state  // 没有匹配的action type，返回原来的state
    }
}

export function dialog(state = {}, action) {
    switch (action.type) {
        case 'SHOW_DIALOG':
            return {
                status: true
            }

        case 'CLOSE_DIALOG':
            return {
                status: false
            }

        default:
        return state  // 没有匹配的action type，返回原来的state
    }
}

var init3 = {
    products:[1,2,3,4]
}
export function list(state = init3, action) {
    switch (action.type) {
        case 'CHANGE_LIST':
        var p = state.products
        return {
            products:action.data//数据每次都是在原来的基础上递增
        }
        default:
        return state  // 没有匹配的action type，返回原来的state
    }
}

