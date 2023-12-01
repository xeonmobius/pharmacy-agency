import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swift Script Partners",
  description:
    "As a leading pharmacy agency, we are committed to providing exceptional healthcare services tailored to meet your unique needs. Our dedicated team of experienced pharmacists and healthcare professionals is here to ensure you receive personalized and comprehensive care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
