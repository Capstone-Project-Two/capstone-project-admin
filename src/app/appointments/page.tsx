import { pageMetadata } from "@/utils/metadata-helpter";
import { Metadata } from "next";
import { Suspense } from "react";
import { Table } from "antd";
import ListAppointment from "@/components/appointment/list-appointment";

export const metadata: Metadata = pageMetadata({
  title: "Appointment",
});

type Props = {};

async function AppointmentsPage({}: Props) {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold">Manage Appointment</h1>
      <Suspense fallback={<Table loading={true} />}>
        <ListAppointment />
      </Suspense>
    </div>
  );
}

export default AppointmentsPage;
