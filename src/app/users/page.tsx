import { pageMetadata } from "@/utils/metadata-helpter"
import { Metadata } from "next"
import ListUser from "../../components/user/list-user"
import { Suspense } from "react"
import { Spin } from "antd"

export const metadata: Metadata = pageMetadata({
  title: "User",
})

type Props = {
  searchParams: {
    page: string
  }
}

function UsersPage({ searchParams }: Props) {
  return (
    <div>
      <Suspense fallback={<Spin />}>
        <ListUser searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

export default UsersPage