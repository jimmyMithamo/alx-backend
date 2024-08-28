const redis = require('redis');
// Create a new client
const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

//handle connection error
client.on('connect', () => {
    console.log('Redis client connected to the server');
});
client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ERROR_MESSAGE ${err}`);
});
