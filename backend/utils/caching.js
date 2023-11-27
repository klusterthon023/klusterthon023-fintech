const NodeCache = require('node-cache');
const myCache = new NodeCache();

exports.getCachedData = (key) => {
   const cachedData = myCache.get(key);
   return cachedData;
}

exports.setCachedData = (key, data) => {
   myCache.set(key, data);
}