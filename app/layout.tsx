import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Subha Health ENT Clinic | Dindigul";
const description = "Specialist ear, nose and throat care for children and adults in Dindigul, with information available in English and Tamil.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
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
      url: baseUrl,
      siteName: "Subha Health ENT Clinic",
      type: "website",
      images: [{ url: `${baseUrl}/og.png`, width: 1728, height: 910, alt: "Subha Health ENT Clinic in Dindigul" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${baseUrl}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
