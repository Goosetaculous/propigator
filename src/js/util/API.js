import axios from "axios";

let BASE_URL = "api.propigator.com";

const API = {

  getAddress: (address, citystatezip)=> {
    return axios.post(BASE_URL+"/property", { address:address, citystatezip:citystatezip });
  },

};

export default API;
