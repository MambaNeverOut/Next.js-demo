import { getDatabaseConnection } from "lib/getDatabaseConnection";
import {getPosts} from "lib/posts";
import md5 from "md5";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { User } from "src/entity/User";

// 声明方式1
// const Posts = (req:NextApiRequest,res:NextApiResponse) => {
// 声明方式2
const Posts: NextApiHandler = async (req,res) => {
  const {username, password, passwordConfirmation} = req.body
  const connection = await getDatabaseConnection()

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const user = new User()
    user.username = username.trim()
    user.password = password;
    user.passwordConfirmation = passwordConfirmation;
    // user.passwordDigest = md5(password)
    await user.validate()
  if(user.hasErrors){
    res.statusCode = 422;
    res.write(JSON.stringify(user.errors))
  }else{
      await connection.manager.save(user);
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  }

  res.end()
}

export default Posts