import { PostResponseDto } from "@/service/api-types"
import PostCard from "./post-card"

type Props = {
  posts: Array<PostResponseDto>
}

function ListPosts({ posts }: Props) {
  return (
    <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default ListPosts