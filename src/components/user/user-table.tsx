"use client"
import { PatientResponseDto } from "@/service/api-types"
import { Button, Table, TableColumnsType } from "antd"
import UserModal from "./user-modal"

type Props = {
  patients: Array<PatientResponseDto>
}

function UserTable({ patients }: Props) {
  const columns: TableColumnsType<PatientResponseDto> = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Phone number",
      dataIndex: "phone_number",
      key: "phone_number"
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles"
    },
    {
      title: 'View',
      dataIndex: '',
      key: 'view_user',
      render: (patient: PatientResponseDto) => (
        <UserModal />
      ),
    },
    {
      title: 'Ban',
      dataIndex: '',
      key: 'ban_user',
      render: (patient: PatientResponseDto) => (
        <Button key={patient._id} onClick={() => {
          alert(patient._id)
        }}>
          Ban
        </Button>
      ),
    },
  ]
  return (
    <Table
      dataSource={patients}
      columns={columns}
    />
  )
}

export default UserTable