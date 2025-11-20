// app/layout.tsx


import "./globals.css";
import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],      // 필요한 굵기들
});

export const metadata: Metadata = {
  title: "HUMI",
  description: "Trace your Soul. Be a HUMI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chakra.className}>
        {children}
      </body>
    </html>
  );
}

