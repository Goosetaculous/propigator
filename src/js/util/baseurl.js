const axios = require('axios')
var url = 'http://api.propigator.com';
var axiosInstance = axios.create({
    baseURL: url
});
module.exports = axiosInstance