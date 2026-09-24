import "./globals.css";
import Sidebar from "../components/Sidebar";
import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Guía de Fundamentos de Programación",
  description:
    "Guía para estudiantes de primer semestre de Sistemas Computacionales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <Sidebar />
        <main className="lg:pl-72 transition-[padding] duration-300 ease-in-out">
          {children}
        </main>
      </body>
    </html>
  );
}
