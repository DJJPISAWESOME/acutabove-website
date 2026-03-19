import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "A Cut Above Landscaping & Excavation | MA", template: "%s | A Cut Above" },
  description: "Expert residential and commercial landscaping, hardscaping, and excavation services across Massachusetts. Licensed, insured, and locally rooted for over a decade.",
  keywords: "landscaping Massachusetts, excavation MA, hardscaping, lawn care, snow removal, commercial landscaping, residential landscaping",
  openGraph: {
    type: "website",
    siteName: "A Cut Above Landscaping & Excavation",
    title: "A Cut Above Landscaping & Excavation",
    description: "Expert landscape solutions for homes and businesses across Massachusetts.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
