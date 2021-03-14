import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {s} from 'styles/s'
import { GetServerSideProps, NextPage } from 'next';
import UAParser from 'ua-parser-js';
import { useEffect, useState } from 'react';
import "reflect-metadata";
import { createConnection, getConnection } from 'typeorm';
import { getDatabaseConnection} from '../lib/getDatabaseConnection'
import { Post } from 'src/entity/Post';


type Props = {
  browser: {
    name: string,
    version: string,
    major: string
  }
}

const index:NextPage<Props> = (props) => {
  const { browser } = props
  const [width, setWidth] = useState(0)
  useEffect(()=>{
    const w = document.documentElement.clientWidth
    setWidth(w)
  },[])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          第一篇文章 
          <Link href="/posts/first-post">
            <a>点击这里</a>
          </Link>
        </h1>

        <h1>标题1</h1>
        <p>段落</p>

        <div>
          <h1>你的浏览器是 {browser.name} </h1>
          <h2>你的浏览器窗口大小是 {width} 像素</h2>
        </div>
        {/* {s}     */}
        {/* 使用这种方式可以覆盖全局样式
        <style jsx global>{`
          body{
            background:red;
          }
        `}</style> */}
      </main>
    </div>
  )
}
export default index;


export const getServerSideProps: GetServerSideProps = async (context)=> {
  const connection = await getDatabaseConnection() // 第一次连接
  const posts = await connection.manager.find(Post)
  console.log(posts);
  
  const ua = context.req.headers['user-agent']
  const result = new UAParser(ua).getResult()  
  return {
    props: {
      browser: result.browser
    }
  }
}


