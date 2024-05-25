import { getPatients } from "@/service/get-service"
import UserTable from "./patient-table"
import EmptyData from "../ui/empty-data"

type Props = {}

async function ListPatients({ }: Props) {
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

export default ListPatients