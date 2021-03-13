import { createConnection, getConnection, getConnectionManager } from "typeorm"

// 简单写法
// let connection

// async function create(){
//   connection = await createConnection()
// }

// const promise = create()

// 高级写法
const promise = (async function (){
  const manager = getConnectionManager()
  if(!manager.has('default')){
    return createConnection()  
  } else {
    const current = manager.get('default')
    if(current.isConnected){
      return current
    }else{
      return createConnection()
    }
  }
})()

export const getDatabaseConnection = async () => {
  return promise  
}
