import { getAppointments, getTherapists } from "@/service/get-service";
import EmptyData from "../ui/empty-data";
import AppointmentTable from "./appointment-table";

type Props = {
  searchParams: {
    status: string;
  };
};

async function ListAppointment({ searchParams }: Props) {
  const { data: appointments } = await getAppointments(searchParams);

  if (!appointments || appointments.length === 0) {
    return <EmptyData />;
  }

  return <AppointmentTable appointments={appointments} />;
}

export default ListAppointment;
