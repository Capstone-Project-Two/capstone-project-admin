import { getPatients } from "@/service/get-service"
import UserTable from "./patient-table"
import EmptyData from "../ui/empty-data"
import PaginationUi from "../ui/pagination"

type Props = {
  searchParams: {
    // [key: string]: string;
    page: string
  }
}

async function ListUser({ searchParams }: Props) {
  const { data: patients, meta, statusCode } = await getPatients({ page: Number(searchParams.page) })

  if (statusCode !== 200) {
    return <EmptyData />
  }

  if (!patients || patients.length === 0) {
    return (
      <EmptyData />
    )
  }

  return (
    <div className="flex flex-col gap-4 items-end">
      <UserTable patients={patients} />
      <PaginationUi
        className="mt-auto"
        totalItems={meta.totalItems}
        currentPage={Number(searchParams.page) ?? 1}
      />
    </div>
  )
}

export default ListPatients