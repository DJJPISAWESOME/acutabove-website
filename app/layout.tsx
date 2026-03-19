import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "A Cut Above Landscaping & Excavation | Massachusetts",
    template: "%s | A Cut Above",
  },
  description:
    "Professional residential and commercial landscaping, hardscaping, excavation, and snow & ice management across 15+ Massachusetts communities.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-chalk text-ink-900 font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
