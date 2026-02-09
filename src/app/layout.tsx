import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import { ThemeProvider } from "@/providers/themeProvider";
import Footer from '@/components/footer'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "codifyx",
  description: "Codifyx Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
        />
      </head>
      <body
        className={`${inter.variable}  antialiased`}
      >
        <ThemeProvider>
          <NavBar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
