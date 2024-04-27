import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
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
            <Head>
                <meta name="description" content={metadata.description || ""} />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
