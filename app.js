const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const testRouter = require('./controllers/test')
const payloadRouter = require('./controllers/payload')
const favouriteRouter = require('./controllers/favourite')
const app = express()

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


app.use(express.json());
console.log('aaarg')
app.use("/api/test", testRouter);
app.use("/api/payload", payloadRouter)
app.use("/api/favourite", favouriteRouter)

module.exports = app;