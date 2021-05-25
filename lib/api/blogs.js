import BaseApi from "./baseApi";

class BlogApi extends BaseApi {
  constructor(accessToken = null) {
    // get access token and url
    super(accessToken , `/blogs`)
  }
}


export default BlogApi;
