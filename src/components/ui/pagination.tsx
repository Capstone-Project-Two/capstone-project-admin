"use client"
import { useSearchParams } from "next/navigation";
import { ShadcnPagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./shadcn-ui/pagination";

type Props = {
  totalPages: number
  baseUrl: string;
  currentPage: number
}

function Pagination({ totalPages, baseUrl, currentPage }: Props) {
  const searchParams = useSearchParams()
  const previousPage = Number(currentPage) - 1
  const nextPage = Number(currentPage) + 1
  const isDisabled = previousPage <= 1 || nextPage > totalPages

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem
        >
          <PaginationPrevious href={isDisabled ? '#' : `${baseUrl}?page=${previousPage}`} />
        </PaginationItem>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink isActive={currentPage - 1 === index} href={`${baseUrl}?page=${index + 1}`}>{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={isDisabled ? '#' : `${baseUrl}?page=${nextPage}`} />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  )
}

export default Pagination