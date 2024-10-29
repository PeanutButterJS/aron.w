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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
      </head>
      <body className={marker.className}>{children}</body>
    </html>
  );
}
