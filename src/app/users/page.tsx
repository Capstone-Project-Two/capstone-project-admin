import { pageMetadata } from "@/utils/metadata-helpter"
import { Metadata } from "next"

export const metadata: Metadata = pageMetadata({
  title: "User",
})

type Props = {}

function UsersPage({ }: Props) {
  return (
    <div>
      UsersPage
    </div>
  )
}

export default UsersPage