import { PatientResponseDto } from "@/service/api-types"

type Props = {
  patient: PatientResponseDto
}

function UserCard({
  patient
}: Props) {
  return (
    <div className="p-2 rounded flex flex-col border border-border">
      <p>Id: {patient?._id}</p>
      <p>Username: {patient.username}</p>
      <p>Email: {patient.email}</p>
      <p>Phone number: {patient.phone_number}</p>
      <p>
        Roles:
        {patient.roles.map((role, index) => (
          <span key={index}>{role}</span>
        ))}
      </p>
    </div>
  )
}

export default UserCard