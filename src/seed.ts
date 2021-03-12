import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
// import { Post } from "./entity/Post";

createConnection().then(async connection => {
  const { manager } = connection
  const u1 = new User();
  u1.username = 'irelia'
  u1.passwordDigest = 'xxx'
  await manager.save(u1);
  console.log(u1.id);

  // const posts = await connection.manager.find(Post);
  // if (posts.length === 0) {
  //   // const p = new Post('Post', '我的第一篇文章');
  //   // p.title = 'Post 1';
  //   // p.content = '我的第一篇文章';

  //   await connection.manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => {
  //     return new Post({ title: `Post${n}`, content: `这是我的第${n}篇文章` })
  //   }))
  //   console.log('posts 数据填充了');

  // }

  // const posts2 = await connection.manager.find(Post);
  // console.log(posts2);
  connection.close()
}).catch(error => console.log(error));
