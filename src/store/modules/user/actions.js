import axios from "axios";

export default {
  userLogin: (commit) => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  },
};
