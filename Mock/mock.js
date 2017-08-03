import Mock from 'mockjs'

//模拟数据的接口
var mock1 = Mock.mock('http://123.com',{
    "data":['haha','nihao','jueditaosha']
})

export default mock1