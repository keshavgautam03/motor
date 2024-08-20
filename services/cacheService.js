const redisClient = require('../config/redis');

const setCache = async (key, value, expiration = 3600) => {
    await redisClient.setEx(key, expiration, JSON.stringify(value));
};

const getCache = async (key) => {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
};

module.exports = {
    setCache,
    getCache,
};
