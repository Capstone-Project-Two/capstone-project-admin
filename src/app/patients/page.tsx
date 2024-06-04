import { pageMetadata } from "@/utils/metadata-helpter"
import { Metadata } from "next"
import ListPatients from "../../components/patients/list-patients"
import { Suspense } from "react"
import { Spin } from "antd"

export const metadata: Metadata = pageMetadata({
  title: "Patients",
})

type Props = {
  searchParams: {
    page: string
  }
}

function PatientsPage({ searchParams }: Props) {
  return (
    <div>
      <Suspense fallback={<Spin />}>
        <ListPatients searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

export default PatientsPage