'use client';
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import { ReactLenis, useLenis } from '@/libs/lenis';

{/*
export const metadata: Metadata = {
  title: "Haya AlMajali",
  description: "my portfolio website",
};
*/}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    console.log('scroll position:', scroll);
  });

  return (
    <html lang="en">
      <body className=''
 >
            <ReactLenis root>
            {children}
            </ReactLenis>
          </body>
    </html>
  );
}
