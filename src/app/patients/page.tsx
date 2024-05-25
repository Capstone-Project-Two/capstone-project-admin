import { pageMetadata } from "@/utils/metadata-helpter"
import { Metadata } from "next"
import ListPatients from "../../components/patients/list-patients"
import { Suspense } from "react"
import { Table } from "antd"

export const metadata: Metadata = pageMetadata({
  title: "User",
})

type Props = {}

async function UsersPage({ }: Props) {
  return (
    <div>
      <Suspense fallback={<Table loading={true} />}>
        <ListPatients />
      </Suspense>
    </div>
  )
}

export default UsersPage