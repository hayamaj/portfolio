import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hayamaj.com"),
  title: "Haya AlMajali",
  description: "Product, AI, and data. Portfolio of Haya AlMajali.",
  openGraph: {
    title: "Haya AlMajali",
    description: "Product, AI, and data. Portfolio of Haya AlMajali.",
    url: "https://hayamaj.com",
    siteName: "Haya AlMajali",
    images: ["/profile.JPG"],
  },
  twitter: {
    card: "summary",
    title: "Haya AlMajali",
    description: "Product, AI, and data. Portfolio of Haya AlMajali.",
    images: ["/profile.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
