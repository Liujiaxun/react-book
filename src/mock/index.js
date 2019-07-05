const Mock = require('mockjs');

Mock.mock('/login',(req,res) => {
    return {
        status: true
    }
})