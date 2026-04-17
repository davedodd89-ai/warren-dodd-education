import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.warrendoddeducation.co.uk"),
  title: {
    default: "Warren Dodd Education",
    template: "%s | Warren Dodd Education",
  },
  description:
    "Bespoke daytime education for home-educated children and flexi-schoolers.",
  openGraph: {
    title: "Warren Dodd Education",
    description:
      "Bespoke daytime education for home-educated children and flexi-schoolers.",
    url: "https://www.warrendoddeducation.co.uk",
    siteName: "Warren Dodd Education",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Warren Dodd Education",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warren Dodd Education",
    description:
      "Bespoke daytime education for home-educated children and flexi-schoolers.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}