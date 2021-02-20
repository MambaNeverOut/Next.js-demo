import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {s} from 'styles/s'
import png from 'assets/images/1.jpg'

console.log(png);
export default function Home() {
  return (
    <div className={styles.container}>
      <img src={png}></img>
      <main className={styles.main}>
        <h1 className={styles.title}>
          第一篇文章 
          <Link rel="icon" href="/posts/first-post">
            <a>点击这里</a>
          </Link>
        </h1>

        <h1>标题1</h1>
        <p>段落</p>

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
