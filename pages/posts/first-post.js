import React, { useCallback } from 'react'
import Link from 'next/link'
import styles from 'styles/first-post.module.scss'

export default function FirstPost(){
  const clickMe = useCallback(()=>{
    console.log('you clicked me');
  },[])
  // <React.Fragment></React.Fragment> 也可以写为 <></>
  return (
    <>  
      <div className={styles.wrapper}>
        <div className={styles.container}>
          内容
        </div> 
        <div className={styles.x}>
          内容2
        </div>
      </div>
      <div>First Post
        <button onClick={clickMe}>click me</button>
        <hr />
        回到首页
        <Link href="/"><a>点击这里</a></Link>
      </div>
    </>
  )
}