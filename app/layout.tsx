import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crispy Corner by LDRR - Authentic Filipino Street Food",
  description: "Experience the best Kare-kare, Dinuguan, Lumpia, and Siomai at Kanluran Night Market, Calauan, Laguna. Open 3PM-10PM daily.",
  keywords: ["Filipino food", "street food", "Kare-kare", "Dinuguan", "Lumpia", "Siomai", "Calauan", "Laguna", "Night Market"],
  authors: [{ name: "Lee Rafael Torres" }],
  openGraph: {
    title: "Crispy Corner by LDRR",
    description: "Authentic Filipino street food at Kanluran Night Market",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
