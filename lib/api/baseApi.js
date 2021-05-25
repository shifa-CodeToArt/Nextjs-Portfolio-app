import axios from "axios";

class BaseApi {
  constructor(accessToken, subpath) {
    this.config = {};
    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`,
      };
    }
    this.api_url = process.env.PORTFOLIO_API_URL + subpath;
  }

  // get all  portfolios and blogs
  getAll() {
    return axios.get(this.api_url);
  }

  // get blogs by slug 
  getBySlug(slug) {
    return axios.get(`${this.api_url}/s/${slug}`);
  }

  // get by user
  getByUser() {
    return axios.get(`${this.api_url}/me`, this.config);
  }
// create neww
  create(data) {
    return axios.post(this.api_url, data, this.config);
  }
  // get by id
  getById(id) {
    return axios.get(this.api_url + `/${id}`);
  }

  // update
  update(id, data) {
    return axios.patch(`${this.api_url}/${id}`, data, this.config);
  }
}

export default BaseApi;
