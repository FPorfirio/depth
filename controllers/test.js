const testRouter = require('express').Router()
const Test = require('../models/test/test')

testRouter.get("/", async (request, response, next) => {
    console.log('get')
    const test = await Test.find({})
    
    if(!test) {
        return response.status(400).json('test-failed')
    }
    return response.status(200).json(test);
});

testRouter.post("/", async (request, response, next) => {
    console.log('post')
    const body = request.body
    const test = new Test({
        test: body.test
    })

    const savedTest = await test.save()
    return response.status(200).json(savedTest);
});


module.exports = testRouter