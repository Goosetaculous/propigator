import axios from "axios";

const API = {

  addUser: (user)=> {
    return axios.post("/user/add", { user });
  },

}
export default API;
