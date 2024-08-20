// const axios = require('axios');
// const redisClient = require('../config/redis');

// const decodeVIN = async (vin) => {
//     const cacheKey = `vin:${vin}`;
//     const cachedData = await redisClient.get(cacheKey);

//     if (cachedData) {
//         return JSON.parse(cachedData);
//     }

//     const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`);
//     const { Manufacturer, Model, ModelYear } = response.data.Results;

//     const vehicleData = { Manufacturer, Model, ModelYear };
//     await redisClient.setex(cacheKey, 3600, JSON.stringify(vehicleData)); // Cache for 1 hour

//     return vehicleData;
// };

// module.exports = {
//     decodeVIN,
// };
const axios = require('axios');
const redisClient = require('../config/redis');

const decodeVIN = async (vin) => {
    const cacheKey = `vin:${vin}`;
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
        return JSON.parse(cachedData);
    }

    const response = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`);
    const { Manufacturer, Model, ModelYear } = response.data.Results;

    const vehicleData = { Manufacturer, Model, ModelYear };
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(vehicleData)); // Cache for 1 hour

    return vehicleData;
};

module.exports = {
    decodeVIN,
};

