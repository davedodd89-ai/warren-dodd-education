import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.warrendoddeducation.co.uk"),
  title: "Warren Dodd Education",
  description:
    "Bespoke daytime education for home-educated children and flexi-schoolers.",
  openGraph: {
    title: "Warren Dodd Education",
    description:
      "Bespoke daytime education for home-educated children and flexi-schoolers.",
    url: "https://www.warrendoddeducation.co.uk",
    siteName: "Warren Dodd Education",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1500,
        height: 500,
        alt: "Warren Dodd Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warren Dodd Education",
    description:
      "Bespoke daytime education for home-educated children and flexi-schoolers.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}