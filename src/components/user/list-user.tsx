import { getPatients } from "@/actions/get-action"
import UserTable from "./user-table"

type Props = {}

async function ListUser({ }: Props) {
  const { data: patients } = await getPatients()

  if (!patients || patients.length === 0) {
    return (
      <div>
        No users
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <UserTable patients={patients} />
    </div>
  )
}

export default ListUser