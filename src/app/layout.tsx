import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

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
