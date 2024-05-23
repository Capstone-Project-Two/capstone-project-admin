import { getPatients } from "@/actions/get-action"
import { pageMetadata } from "@/utils/metadata-helpter"
import { Button } from "antd"
import { Metadata } from "next"

export const metadata: Metadata = pageMetadata({
  title: "User",
})

type Props = {}

async function UsersPage({ }: Props) {
  const { data: patients } = await getPatients()

  if (!patients || patients.length === 0) {
    return (
      <div>
        No users
      </div>
    )
  }

  return (
    <div>
      <Button>
        Click me
      </Button>
      {patients.map(patient => (
        <div key={patient._id}>
          {patient.email}
        </div>
      ))}
    </div>
  )
}

export default UsersPage