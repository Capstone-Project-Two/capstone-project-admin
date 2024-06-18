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
    {
      title: "Symptoms",
      dataIndex: "symptoms",
      key: "symptoms",
    },
    {
      title: "Patient",
      dataIndex: "_id",
      key: "patient",
    },
    {
      title: "Therapist",
      dataIndex: "_id",
      key: "therapist",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "20%",
    },
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
