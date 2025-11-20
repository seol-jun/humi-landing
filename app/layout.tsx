import "./globals.css";
import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "HUMI WORLD",
  description: "Welcome to HUMI — The world of mystery and adventures.",
  icons: {
    icon: "/favicon.ico", // 또는 "/favicon.png"
  },
  openGraph: {
    title: "HUMI WORLD",
    description: "Discover HUMI's universe.",
    url: "https://humi-landing.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HUMI Landing Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HUMI WORLD",
    description: "Explore the world of HUMI!",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={chakraPetch.className}>{children}</body>
    </html>
  );
}
