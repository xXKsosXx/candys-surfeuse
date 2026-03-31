// ✅ design.md appliqué
import type { Metadata } from "next";
import { Epilogue, Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Candys — Vêtements de sport aquatique",
  description:
    "Maillots de bain, combinaisons et habits d'été pour les femmes qui vivent l'océan. Par Candy Oliveira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${epilogue.variable} ${inter.variable} ${workSans.variable}`}
    >
      <body className="font-body bg-surface text-on-surface antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
