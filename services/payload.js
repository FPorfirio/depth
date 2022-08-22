const axios = require('axios').default;

//https://api.spacexdata.com/v3/launches
//https://api.spacexdata.com/v3/rockets

const spaceXService = async(endpoint) => {
    const spaceXServiceLauches = await axios(`https://api.spacexdata.com/v3/${endpoint}`)
    const spaceXServiceLaunchesRes = await spaceXServiceLauches.data

    return spaceXServiceLaunchesRes
}

module.exports = spaceXService