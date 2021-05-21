import axios from 'axios';

class PortfolioApi {

  constructor(accessToken= null ){
 
    this.config = {}

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`
      }
    }

    this.api_url = process.env.PORTFOLIO_API_URL + `/portfolios`;

  }
  getAll() {
    return axios.get(this.api_url);
  }

  getById(id) {
    return axios.get(this.api_url  + `${id}`)
  }

  createPortfolio(data){
    return axios.post(this.api_url , data , this.config);
  }

}



export default PortfolioApi;