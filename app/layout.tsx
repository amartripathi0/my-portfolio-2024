import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat  =  Montserrat( {subsets : ["latin"] , 
weight : "500"})

export const metadata: Metadata = {
  title: "Amar's Portfolio",
  description: "This is a website protofilo of Amar Tripathi made using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
