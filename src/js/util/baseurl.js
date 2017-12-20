const axios = require('axios');
var url = process.env.NODE_ENV != 'development' ? 'http://api.propigator.com': 'http://127.0.0.1:3000/';
var axiosInstance = axios.create({
    baseURL: url,
    headers: {"x-auth": process.env.PROPIGATOR_JWT_TOKEN || "Bearer JWT-Token"}
});
module.exports = axiosInstance;