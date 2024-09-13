import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
//
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Presentasi Skripsi",
    description: "Created using next js + framer motion",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jetbrainsMono.className} antialiased bg-grid-small-black/[0.2]`}>{children}</body>
        </html>
    );
}
