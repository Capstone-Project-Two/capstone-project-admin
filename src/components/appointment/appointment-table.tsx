"use client";
import { AppointmentResponseDto } from "@/service/api-types";
import { Table, TableColumnsType } from "antd";
import { convertDatasource } from "@/utils/antd-data-helper";

type Props = {
  appointments: Array<AppointmentResponseDto>;
};

function AppointmentTable({ appointments }: Props) {
  const columns: TableColumnsType<AppointmentResponseDto> = [
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
    // {
    //   title: "Last name",
    //   dataIndex: "last_name",
    //   key: "last_name",
    // },
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    // },
    // {
    //   title: "Username",
    //   dataIndex: "username",
    //   key: "username",
    // },
    // {
    //   title: "Phone number",
    //   dataIndex: "phone_number",
    //   key: "phone_number",
    //   width: "20%",
    // },
    // {
    //   title: "Roles",
    //   dataIndex: "roles",
    //   key: "roles",
    //   width: "10%",
    //   className: "font-medium uppercase",
    // },
  ];
  return (
    <Table
      pagination={{
        hideOnSinglePage: true,
      }}
      dataSource={convertDatasource(appointments)}
      columns={columns}
    />
  );
}

export default AppointmentTable;
