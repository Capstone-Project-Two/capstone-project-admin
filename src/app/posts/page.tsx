import ListPosts from "@/components/posts/list-posts"
import PaginationUi from "@/components/ui/pagination"
import { getPosts } from "@/service/get-service"
import { Spin } from "antd"
import { Suspense } from "react"

type Props = {
  searchParams: {
    page: string;
  }
}

async function PostPage({ searchParams }: Props) {
  const currentPage = Number(searchParams.page) ?? 1
  const { data: posts, meta } = await getPosts({ page: currentPage })
  return (
    <div className="flex flex-col gap-4 items-end">
      <Suspense fallback={<Spin />}>
        <ListPosts posts={posts} />
      </Suspense>
      <PaginationUi
        totalItems={meta.totalItems}
        currentPage={Number(searchParams.page) ?? 1}
      />
    </div>
  )
}

export default PostPage