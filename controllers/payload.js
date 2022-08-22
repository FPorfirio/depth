const payloadRouter = require('express').Router()
const Favourite = require('../models/test/favourite')
const spaceXService = require('../services/payload')


payloadRouter.get('/', async (request, response, next) => {
   
    const spaceXServiceLaunchesRes = await spaceXService('launches')
    const spaceXServiceRocketsRes = await spaceXService('rockets')

    const userId = 12
    const favourite =  await Favourite.find({userId: userId})
    console.log(favourite)

    const launchesData = spaceXServiceLaunchesRes.map( launch => {
        const rocket = spaceXServiceRocketsRes.find(rocket =>  launch.rocket.rocket_id === rocket.rocket_id)
        const rocketData = {
            rocket_id: rocket.id,
            rocket_name: rocket.rocket_name,
            description:  rocket.description,
            images: rocket.flickr_images,
        }

        const {payload_id, manufacturer, payload_type: type} = launch.rocket.second_stage.payloads[0]

        const isFavourite = favourite[0].flight_number == launch.flight_number

        return {
            flight_number: launch.flight_number,
            mission_name: launch.mission_name,
            rocket: rocketData,
            payloads: [{payload_id, manufacturer, type}],
            favourite: isFavourite
        }     
    })

    return response.status(200).json(launchesData)
})

module.exports = payloadRouter
