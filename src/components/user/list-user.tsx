import { getPatients } from "@/actions/get-action"
import UserCard from "@/components/user/user-card"

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
      {patients.map(patient => (
        <UserCard patient={patient} key={patient._id} />
      ))}
    </div>
  )
}

export default ListUser