import { createConnection, getConnection, getConnectionManager } from "typeorm"
// import * as manager from './manager'

// 简单写法
// let connection

// async function create(){
//   connection = await createConnection()
// }

// const promise = create()

// 高级写法（使用 typeorm 自带的 manager）
const promise = (async function (){
  const manager = getConnectionManager()
  if(!manager.has('default')){  // manager是否有connection
    return createConnection()  
  } else {
    const current = manager.get('default')
    if(current.isConnected){  // connection是否已经关闭
      return current
    }else{
      return createConnection()
    }
  }
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
