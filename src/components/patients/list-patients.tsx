import { getPatients } from "@/service/get-service"
import UserTable from "./patient-table"
import EmptyData from "../ui/empty-data"
import Pagination from "../ui/pagination"
import { ROUTER_PATH } from "@/constants/route-constant"

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
    <>
      <UserTable patients={patients} />

      <Pagination
        totalPages={meta.totalPages}
        baseUrl={ROUTER_PATH.USERS}
        currentPage={Number(searchParams.page)}
      />
    </>
  )
}

export default ListPatients