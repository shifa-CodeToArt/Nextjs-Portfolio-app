
import BaseApi from "./baseApi";
import axios from "axios";


class PortfolioApi extends BaseApi {
  constructor(accessToken = null) {
     // get access token and url
    super(accessToken , `/portfolios`)
    
  }
  // getAll() {
  //   return axios.get(this.api_url);
  // }

  // delete(id) {
  //   return axios.delete(`${this.api_url}/${id}`, this.config);
  // }
}

export default PortfolioApi;
