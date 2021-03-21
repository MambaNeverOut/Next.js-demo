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

  const errors = {
    username: [] as string[],
    password: [] as string[],
    passwordConfirmation: [] as string[],
  }
  if(username.trim() === ''){
    errors.username.push('用户名不能为空')
  }
  if(!/[a-zA-Z0-9]/.test(username.trim())){
    errors.username.push('用户名格式不合法')
  }
  if(username.trim().length > 42){
    errors.username.push('用户名太长')
  }
  if(username.trim().length < 3){
    errors.username.push('用户名太短')
  }
  const found = connection.manager.find(User,{username})
  if(found){
    errors.username.push('用户名已存在，不能重复注册')
  }
  if(password === ''){
    errors.password.push('密码不能为空')
  }
  if(password !== passwordConfirmation){
    errors.passwordConfirmation.push('密码不匹配')
  }
  const hasErrors = Object.values(errors).find(v => v.length > 0)
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if(hasErrors){
    res.statusCode = 422;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(errors))
  }else{
    const user = new User()
    user.username = username.trim()
    user.passwordDigest = md5(password)
    try{
      await connection.manager.save(user);
    }catch(error){
      console.log('--------');
      console.log(error);
      
    }
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  }

  res.end()
}

export default Posts