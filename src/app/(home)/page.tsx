import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/shadcn-ui/pagination"
import { pageMetadata } from "@/utils/metadata-helpter"
import { Metadata } from "next"

export const metadata: Metadata = pageMetadata({
  title: "Home"
})

type Props = {}

function Home({ }: Props) {
  return (
    <div>
      Capstone Admin
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/users">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default Home