const axios = require('axios')
var url = process.env.NODE_ENV != 'development' ? 'http://api.propigator.com': 'http://127.0.0.1:3000/';

var axiosInstance = axios.create({
    baseURL: url
});
module.exports = axiosInstance