import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AGRI — High Quality Indonesian Natural Resources",
  description:
    "B2B Exporter, Manufacturer & Aggregator of Indonesian Commodities: Coconut Charcoal Briquettes, Patchouli Oil, Clove Oil, Dried Teak Leaves, and SVLK Timber.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F3EE] text-[#3D4740] selection:bg-[#7D9985]/25 selection:text-[#1C2921]">
        {children}
      </body>
    </html>
  );
}
