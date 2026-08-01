import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import StoreProviders from "./StoreProviders";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IR - Ibhaudur Rahman",
  description: "Portfolio of Ibhaudur Rahman, a software engineer and web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-Montserrat"}>
        <StoreProviders>
          {" "}
          <NavHeader />
          <main className="pt-18 sm:pt-20">{children}</main>
        </StoreProviders>
      </body>
    </html>
  );
}
