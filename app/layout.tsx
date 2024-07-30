import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});
const oswald = Oswald({
  subsets: ["latin"],

});


export const metadata: Metadata = {
  title: "My BnB App",
  description: "Pracrice airBnbApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.className}`}>{children}</body>

    </html>
  );
}
