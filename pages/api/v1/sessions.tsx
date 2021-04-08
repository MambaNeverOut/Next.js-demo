import { getDatabaseConnection } from "lib/getDatabaseConnection";
import withSession from "lib/withSesstion";
import { NextApiHandler } from "next";
import { User } from "src/entity/User";
import { SignIn } from "src/model/SignIn";

const Sessions: NextApiHandler = async (req,res) => {
  const {username, password, passwordConfirmation} = req.body
  const connection = await getDatabaseConnection()
  const user = await connection.manager.findOne(User, {where: {username}})

  
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const signIn = new SignIn();

  signIn.username = username;
  signIn.password = password;
  await signIn.validate()

  if(signIn.hasErrors()){
    res.statusCode = 422;
    res.end(JSON.stringify(signIn.errors))
  }else{
    req.session.set('currentUser', signIn.user)
    await req.session.save()
    res.statusCode = 200;
    res.end(JSON.stringify(signIn.user))
  }

  // res.setHeader('Content-Type', 'application/json; charset=utf-8');
  // res.statusCode = 200;
  // res.write('');

  // res.end()
}

export default withSession(Sessions);