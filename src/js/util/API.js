var client = require('./baseurl');

const API = {

  getAddress: (parameters)=> {
    return client.post("/property", parameters);
  },

};

export default API;
