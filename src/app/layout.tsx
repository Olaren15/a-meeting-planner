import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
    subsets: ["latin"],
    preload: true,
    fallback: ["Trebuchet MS", "Helvetica", "sans-serif"],
});

export const metadata = {
    title: "A Meeting Planner",
    description: "A boring way to plan your meetings",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
