import type { Metadata } from "next";
import "./globals.css";

const title = "Subha Health ENT Clinic | Dindigul";
const description = "Specialist ear, nose and throat care for children and adults in Dindigul, with information available in English and Tamil.";
const siteUrl = "https://subhahealthclinic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/subha-health-logo.png",
    shortcut: "/subha-health-logo.png",
    apple: "/subha-health-logo.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Subha Health ENT Clinic",
    type: "website",
    images: [{ url: `${siteUrl}/og.png`, width: 1728, height: 910, alt: "Subha Health ENT Clinic in Dindigul" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
