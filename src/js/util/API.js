var client = require('./baseurl');

const API = {

  getAddress: (parameters)=> {
    return client.post("/api/home/property", parameters);
  },

};

export default API;
