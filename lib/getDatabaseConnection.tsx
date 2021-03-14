import { Post } from "src/entity/Post"
import { User } from "src/entity/User"
import { Comment } from "src/entity/Comment"
import { createConnection, getConnection, getConnectionManager } from "typeorm"
import config from 'ormconfig.json'
// import * as manager from './manager'

// 简单写法
// let connection

// async function create(){
//   connection = await createConnection()
// }

// const promise = create()

// 高级写法（使用 typeorm 自带的 manager）
const create = async () => {
  // @ts-ignore
  return createConnection({
    ...config,
    entities: [Post, User, Comment]
  })
}

const promise = (async function (){
  const manager = getConnectionManager()
  const current = manager.has('default') && manager.get('default')
    if(current){  
      await current.close();
    }
    return create()
})()

// 使用自己封装的 manager
// const promise = (async function (){
//   // const manager = getConnectionManager()
//   if(!manager.has()){
//     console.log('没有默认connection，创建新的');
//     return createConnection()  
//   } else {
//     const current = manager.get()
//     if(current.isConnected){
//     console.log('有默认connection复用');
//       return current
//     }else{
//       return createConnection()
//     }
//   }
// })()


export const getDatabaseConnection = async () => {
  return promise  
}
