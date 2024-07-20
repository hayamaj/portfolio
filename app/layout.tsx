import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import VantaBackground from "@/components/VantaBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haya AlMajali",
  description: "my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='${inter.className} bg-[#FAF9F6]'
 >
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
