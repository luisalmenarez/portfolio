import './globals.css';
import { Montserrat } from 'next/font/google';
import Header from '../components/header';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ['latin'] });
export const metadata = {
  title: 'Luis Almenarez - Software Developer',
  description: 'Luis Almenarez - Software Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
