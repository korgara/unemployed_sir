import { Suspense } from "react";
import { InvoicesTableSkeleton } from "../ui/skeletons";
import Table from './table';
import Pagination from './pagination';
import { fetchInvoicesPages } from "@/app/lib/data";

export default async function TableWrapper(props: any) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);


  return (
    <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
      <Table query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </Suspense>
  );
}
