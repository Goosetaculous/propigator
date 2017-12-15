var client = require('./baseurl');

const API = {

  getAddress: (address, citystatezip)=> {
    return client.post("/property", { address:address, citystatezip:citystatezip });
  },

};

export default API;
