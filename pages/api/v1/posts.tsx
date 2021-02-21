import {getPosts} from "lib/posts";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// 声明方式1
// const Posts = (req:NextApiRequest,res:NextApiResponse) => {
// 声明方式2
const Posts: NextApiHandler = async (req,res) => {
  const posts = await getPosts()
  console.log(posts);
  
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(posts))
  res.end()
}

export default Posts