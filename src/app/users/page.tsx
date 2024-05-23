import { pageMetadata } from "@/utils/metadata-helpter"
import { Metadata } from "next"
import ListUser from "./list-user"
import { Suspense } from "react"

export const metadata: Metadata = pageMetadata({
  title: "User",
})

type Props = {}

async function UsersPage({ }: Props) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ListUser />
      </Suspense>
    </div>
  )
}

export default UsersPage