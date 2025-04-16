import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/section/Header";
import Footer from "./components/section/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PhotoFeed",
  description: "Advanced Routing Nextjs App",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="w-11/12 mx-auto py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
