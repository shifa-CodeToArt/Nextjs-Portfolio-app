import axios from "axios";
import PortfolioApi from "@/lib/api/portfolios";
import auth0 from "@/utils/auth0";

export default async function createPortfolio(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);
    const data = req.body;
    await new PortfolioApi(accessToken).create(data);
    return res.json({ message: "Portfolio was created!" });
  } catch (e) {
      console.log("we are getting error here")
    return res.status(e.status || 400).json(e.response.data);
  }
}

// const data = req.body;
// await new PortfolioApi().createPortfolio(data);
// await axios.post("http://localhost:3001/api/v1/portfolios", data);