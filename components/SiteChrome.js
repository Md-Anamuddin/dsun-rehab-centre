'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  if (isAdminRoute) return <>{children}</>;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
