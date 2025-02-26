import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OFS | Book'S",
  description:
    " OFS Book'S  | Baixa ebook em pdf da área de tecnologia, Desenvolvido por OFS | OliveiraFullStack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className={`${geistSans.variable} , antialiased`}>{children}</body>
    </html>
  );
}
