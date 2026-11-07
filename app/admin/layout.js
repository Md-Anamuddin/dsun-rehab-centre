
import AdminSidebar from '@/components/admin/AdminSidebar';
import styles from './layout.module.css';

export const metadata = {
  title: 'Admin Panel | D Sun Rehab & Autism Centre',
  description: 'Admin dashboard for D Sun Rehab & Autism Centre',
};

export default function AdminLayout({ children }) {
  return (
    <div
      className={styles.adminShell}
      style={{
        margin: 0,
        padding: 0,
        background: '#F4F5F7',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <AdminSidebar />

      <div className={styles.adminMain}>
        {children}
      </div>
    </div>
  );
}
