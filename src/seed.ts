import "reflect-metadata";
import { createConnection } from "typeorm";
import { Post } from "./entity/Post";
import { User } from "./entity/User";
import { Comment } from "./entity/Comment";

createConnection().then(async connection => {
  const { manager } = connection
  const u1 = new User();
  u1.username = 'irelia'
  u1.passwordDigest = 'xxx'
  await manager.save(u1);
  console.log(u1.id);
  // 创建 post 1
  const p1 = new Post();
  p1.title = 'Post 1';
  p1.content = 'My First Post';
  p1.author = u1;
  await manager.save(p1);
  const c1 = new Comment();
  c1.user = u1;
  c1.post = p1;
  c1.content = 'Awesome'
  await manager.save(c1)
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
