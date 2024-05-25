import { getPatients } from "@/service/get-service"
import UserTable from "./user-table"
import EmptyData from "../ui/empty-data"

type Props = {}

async function ListUser({ }: Props) {
  const { data: patients } = await getPatients()

  if (!patients || patients.length === 0) {
    return (
      <EmptyData />
    )
  }

  return (
    <UserTable patients={patients} />
  )
}

export default ListUser