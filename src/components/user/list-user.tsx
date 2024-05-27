import { getPatients } from "@/service/get-service"
import UserTable from "./user-table"
import EmptyData from "../ui/empty-data"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/shadcn-ui/pagination"
import { ROUTER_PATH } from "@/constants/route-constant"

type Props = {
  searchParams: {
    // [key: string]: string;
    page: string
  }
}

async function ListUser({ searchParams }: Props) {
  const { data: patients, meta } = await getPatients({ page: Number(searchParams.page) })
  const previousPage = Number(searchParams.page) - 1
  const nextPage = Number(searchParams.page) + 1

  if (!patients || patients.length === 0) {
    return (
      <EmptyData />
    )
  }

  return (
    <>
      <UserTable patients={patients} />

      <Pagination>
        <PaginationContent>
          {previousPage >= 1 && (
            <PaginationItem>
              <PaginationPrevious href={`${ROUTER_PATH.USERS}?page=${previousPage}`} />
            </PaginationItem>
          )}
          {Array.from({ length: meta?.totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink href={`${ROUTER_PATH.USERS}?page=${index + 1}`}>{index + 1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          {nextPage <= meta?.totalPages && (
            <PaginationItem>
              <PaginationNext href={`${ROUTER_PATH.USERS}?page=${nextPage}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default ListUser