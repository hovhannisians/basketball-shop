import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BleenkBadge from '../components/BleenkBadge'
import { CartProvider } from '../context/CartContext';
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
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
        <BleenkBadge />
      </body>
    </html>
  );
}
