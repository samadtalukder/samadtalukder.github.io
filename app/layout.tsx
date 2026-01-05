import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Samad Talukder | Android Developer Portfolio",
  description: "Mobile Apps Developer Portfolio - Android Developer specializing in Kotlin, Flutter, and Java. Based in Kuala Lumpur, Malaysia.",
  keywords: ["Android Developer", "Kotlin", "Flutter", "Java", "Mobile App Developer", "Malaysia", "Samad Talukder"],
  authors: [{ name: "Samad Talukder" }],
  openGraph: {
    title: "Samad Talukder | Android Developer",
    description: "Mobile Apps Developer Portfolio - Android Developer specializing in Kotlin, Flutter, and Java",
    url: "https://samadtalukder.com",
    siteName: "Samad Talukder Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
