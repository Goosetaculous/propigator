var client = require('./baseurl')
import axios from "axios";

// let BASE_URL = process.env.PROPIGATOR_API_ADDRESS;

const API = {

  getAddress: (address, citystatezip)=> {
    return axios.post("http://api.propigator.com/property", { address:address, citystatezip:citystatezip });
  },

};

export default API;
