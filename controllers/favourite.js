const favouriteRouter = require('express').Router()
const Favourite = require('../models/test/favourite')

favouriteRouter.post('/', async(req, res) => {
    const {flight_number} = req.body
    const userId = 12
    

    try {
        const savedFavourite = await Favourite.findOneAndUpdate({userId: userId},{$set:{
            userId,
            flight_number,
            favourite: true
        }},{upsert: true})

        return res.status(200).json(savedFavourite)
    }
    catch{
        return res.status(400)
    } 
})

module.exports = favouriteRouter