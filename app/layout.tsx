import type { Metadata } from "next";
import { Open_Sans, Permanent_Marker } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});
const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aron Weinraub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={marker.className}>{children}</body>
    </html>
  );
}
