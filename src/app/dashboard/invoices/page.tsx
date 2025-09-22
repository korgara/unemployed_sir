import Search from './search';
import { CreateInvoice } from './buttons';
import { lusitana } from '@/app/ui/fonts';
import TableWrapper from './table-wrapper';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = props.searchParams;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <TableWrapper searchParams={searchParams}/>
    </div>
  );
}
