import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BleenkBadge from '../components/BleenkBadge';
import { Providers } from '@/components/providers';
import Header from '../components/Header';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  generator: 'Bleenk',
  title: "HoopsHub | Basketball Gear & Apparel",
  description: "Your ultimate destination for premium basketball gear, apparel, and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <Providers>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          <BleenkBadge />
        </Providers>
      </body>
    </html>
  );
}
