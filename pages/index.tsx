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
  posts: Post[],

}

const index:NextPage<Props> = (props) => {
  const {  posts } = props
  console.log(posts);
  
  return (
    <div>
      <h1>文章列表</h1>
      {posts.map(post => 
        <Link key={post.id} href={`/posts/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      )}
    </div>
  )
}
export default index;


export const getServerSideProps: GetServerSideProps = async (context)=> {
  const connection = await getDatabaseConnection() // 第一次连接
  const posts = await connection.manager.find(Post)
  const ua = context.req.headers['user-agent']
  const result = new UAParser(ua).getResult()  
  return {
    props: {
      browser: result.browser,
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}


