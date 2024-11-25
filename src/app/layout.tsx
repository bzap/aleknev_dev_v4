import React from "react";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Linas Aleknevičius",
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
                className={`${montserrat.className} dark transition-colors duration-200`}
            >
                {children}
            </body>
        </html>
    );
}
