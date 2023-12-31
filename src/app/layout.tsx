import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import Navbar from "@/components/Nav";
import TrpcProvider from "@/Providers/TrpcProvider";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import { constructMetadata } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className={"relative flex flex-col min-h-screen"}>
          <TrpcProvider>
            <Navbar />
            <div className={"flex-grow flex-1"}>{children}</div>
            <Footer />
          </TrpcProvider>
        </main>
        <Toaster position={"top-center"} richColors={true} />
      </body>
    </html>
  );
}
