import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from './ui/layout/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket for events - Botick",
  description: "Book a ticket, book a time!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Providers>
          <div className='header'>
            <Header />
          </div>
          {children}</Providers>
      </body>
    </html>
  );
}