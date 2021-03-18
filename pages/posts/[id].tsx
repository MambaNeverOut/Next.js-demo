import { getDatabaseConnection } from "lib/getDatabaseConnection"
import { getPost, getPostIds } from "lib/posts"
import { GetServerSideProps, NextPage } from "next"
import { Post } from "src/entity/Post"
import UAParser from "ua-parser-js"

type Props = {
  post: Post
}

const postsShow:NextPage<Props> = (props) => {
  const {post} = props
  console.log(post);
  
  return (
    <div>
      <h1>{post.title}</h1>
      {/* React 渲染HTML的方式 */}
      <article dangerouslySetInnerHTML={ {__html: post.content} }>
      </article>
    </div>
  )
}

export default postsShow

export const getServerSideProps: GetServerSideProps<any, {id:string}> = async (context)=> {
  const connection = await getDatabaseConnection() // 第一次连接
  const posts = await connection.manager.findOne(Post, context.params.id)
  console.log(posts);
  
  return {
    props: {
      post: JSON.parse(JSON.stringify(posts))
    }
  }
}


// export const getStaticPaths = async ()=>{
//   const idList = await getPostIds()
//   return {
//     paths: idList.map(id=>({params:{id: id}})),
//     fallback: true
//   }
// }

// export const getStaticProps = async (x: any) => {
//   const id = x.params.id
//   const post = await getPost(id)
  
//   return {
//     props:{
//       post: post
//     }
//   }
// }
