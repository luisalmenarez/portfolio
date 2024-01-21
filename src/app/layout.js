import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Hero from "../components/Landing";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luis Almenarez - Software Developer",
  description: "Luis Almenarez - Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Hero />
        {children}
      </body>
    </html>
  );
}
