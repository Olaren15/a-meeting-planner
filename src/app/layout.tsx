import { Inter } from "next/font/google";
import Link from "next/link";

import React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    preload: true,
    fallback: ["Trebuchet MS", "Helvetica", "sans-serif"],
});

export const metadata = {
    title: "A Meeting Planner",
    description: "A boring way to plan your meetings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex h-screen flex-col`}>
                <Link className={"sr-only focus:not-sr-only"} href={"#main"}>
                    Skip to main content
                </Link>
                <Header />
                <main id={"main"} className={"grow"}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
