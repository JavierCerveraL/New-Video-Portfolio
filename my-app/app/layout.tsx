import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";
 
// Import Cinzel for headings
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});
 
// Import Lato for body text
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});
 
export const metadata: Metadata = {
  title: "Javi Cervera",
  description: "Video Portfolio",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
      <body style={{ fontFamily: lato.style.fontFamily }}>{children}</body>
    </html>
  );
}
 