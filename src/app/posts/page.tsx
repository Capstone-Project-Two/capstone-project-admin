import ListPosts from "@/components/posts/list-posts"
import { getPosts } from "@/service/get-service"
import { Spin } from "antd"
import { Suspense } from "react"

type Props = {}

async function PostPage({ }: Props) {
  const { data: posts } = await getPosts()
  return (
    <div>
      <Suspense fallback={<Spin />}>
        <ListPosts posts={posts} />
      </Suspense>
    </div>
  )
}

export default PostPage