import { getPost, getPostIds } from "lib/posts"
import { NextPage } from "next"

type Props = {
  post: Post
}

const postsShow:NextPage<Props> = (props) => {
  const {post} = props
  console.log(post);
  
  return (
    <div>
      {/* <h1>{post.title}</h1> */}
      {/* React 渲染HTML的方式 */}
      <article dangerouslySetInnerHTML={ {__html: post.htmlContent} }>
      </article>
    </div>
  )
}

export default postsShow

export const getStaticPaths = async ()=>{
  const idList = await getPostIds()
  return {
    paths: idList.map(id=>({params:{id: id}})),
    fallback: true
  }
}

export const getStaticProps = async (x: any) => {
  const id = x.params.id
  const post = await getPost(id)
  console.log(post);
  
  return {
    props:{
      post: post
    }
  }
}