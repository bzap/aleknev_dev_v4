import React from "react";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Corben, Shrikhand } from "next/font/google";

import "./globals.css";

const montserrat = Corben({ subsets: ["latin"], weight: ['400', '700'] });
const spectral = Shrikhand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-spectral',
});

export const metadata: Metadata = {
    title: "Visual Matter",
    description: "Personal website of Linas Aleknevičius.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Analytics />
            <body
                className={`${montserrat.className} ${spectral.variable} dark transition-colors duration-200`}
            >
                {children}
            </body>
        </html>
    );
}
