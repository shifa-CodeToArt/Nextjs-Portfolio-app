import axios from "axios";

export default async(req,res)=>{
// fetch data from  "https://jsonplaceholder.typicode.com/posts"
    try {
      const axiosRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
     const posts = axiosRes.data;
      console.log(posts);
      res.status(200).json(posts.slice(0, 10));
    } catch (e) {
      res.status(e.status || 400).json({message: 'Api error'});
    }
}
