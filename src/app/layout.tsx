import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imdb next",
  description: "movies search engine",
  keywords: "imdb, movies, movie database",
  manifest: "/manifest.json",
  icons: {
    apple: "/imdb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Header />
            <Navbar />
            <SearchBox />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
