import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { BodyClassController } from "@/components/BodyClassSetter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yogesh Singh Chilwal",
  description: "Building Web Applications That Matter.",
  keywords: [
    "yogesh",
    "singh",
    "chilwal",
    "yogesh singh",
    "IoT",
    "Arduino",
    "ESP32",
    "Coding",
    "Typescript",
    "JavaScript",
    "Next.js",
    "React",
    "Interview",
    "Notes",
    "Books",
    "PDF",
    "Web Development",
    "Devops",
    "MERN Stack",
  ],
  verification: {
    google: "9UMDMpdt8DEjRwLGOJlHC7QsAY4B9AeSdVIPkyzhlUg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
         <BodyClassController enableOverflowHidden />
           {children}
       
         <Analytics />
      </body>
    </html>
  );
}
