import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata = {
  title: 'D Sun Rehab & Autism Centre | Patna, Bihar',
  description:
    'D Sun Rehab & Autism Centre — Empowering Abilities, Enriching Lives. Expert Occupational Therapy, Speech Therapy, ABA Therapy, Special Education & more in Patna, Bihar.',
  keywords:
    'autism centre patna, rehab centre bihar, occupational therapy, speech therapy, ABA therapy, special education, language therapy, group therapy, D Sun Rehab',
  authors: [{ name: 'D Sun Rehab & Autism Centre' }],
  openGraph: {
    title: 'D Sun Rehab & Autism Centre | Patna, Bihar',
    description: 'Empowering Abilities, Enriching Lives. Expert therapy services for children with autism in Patna.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
