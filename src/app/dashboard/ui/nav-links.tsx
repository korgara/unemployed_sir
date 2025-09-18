'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
        <Link href="/dashboard" className={pathname === '/dashboard' ? 'text-blue-500' : 'text-gray-500'}>dasboard</Link>
        <Link href="/dashboard/invoices" className={pathname === '/dashboard/invoices' ? 'text-blue-500' : 'text-gray-500'}>invoices</Link>
        <Link href="/dashboard/customers" className={pathname === '/dashboard/customers' ? 'text-blue-500' : 'text-gray-500'} >customers</Link>
    </>
  )
}
