import { NextPage } from "next"
import { usePosts } from "hooks/usePosts"
import { getPosts } from "lib/posts"
import React from "react"
import Link from "next/link"

type Props = {
  posts: Post[]
}
// 类型声明（NextPage）  用泛型给NextPage传个参数（Props）
const PostsIndex: NextPage<Props> = (props) => {
  const { posts } = props
  // const {posts, isLoading, isEmpty} = usePosts()
  return (
    <div>
      <h1>文章列表</h1>
      {posts.map(p => 
        <div key={p.id}> 
          <Link href="/posts/[id]" as={`/posts/${p.id}`}>{p.id}</Link>
        </div>
      )}
      {/* {isLoading ? <div>加载中</div> :
        isEmpty ? <div>没有文章</div> :
          posts.map(p => <div key={p.id}>
            {p.id}
          </div> )} */}
    </div>
  )
}

export default PostsIndex

export const getStaticProps = async () => {
  const posts = await getPosts()
  return { props: {posts: JSON.parse(JSON.stringify(posts))} }
}