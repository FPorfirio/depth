require('dotenv').config()

const PORT  = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const BASE_URL = process.env.BASE_URL
module.exports = {
    PORT,
    MONGODB_URI,
    BASE_URL
}