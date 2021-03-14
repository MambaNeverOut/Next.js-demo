import {Connection, createConnection} from 'typeorm';

console.log('manager.tsx 执行了');


let connection: Connection = null;

export const create = async () => {
  connection = await createConnection();
  return connection
}

export const get = () => {
  return connection 
}

export const has = () => {
  return connection !== null
}