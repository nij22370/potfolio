import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import ScrollProgress from "@/components/Helper/ScrollProgress";
import { ThemeProvider } from "@/components/Helper/ThemeProvider";

const font = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Sandesh Dhakal — Frontend Developer",
  description:
    "Sandesh Dhakal — Frontend Developer based in Lalitpur, Nepal. Building high-performance web applications with Next.js, React, and TypeScript.",
  openGraph: {
    title: "Sandesh Dhakal — Frontend Developer",
    description:
      "Frontend Developer based in Lalitpur, Nepal. Building with Next.js, React, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${font.variable} font-sans antialiased bg-[var(--color-canvas)]`}>
        <ThemeProvider>
          <ScrollProgress />
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
