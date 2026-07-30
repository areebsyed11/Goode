import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Goode Plumbing | Premium Plumbing in Clovis, CA",
  description:
    "Goode Plumbing delivers fast drain cleaning, water heater repair, leak repair, sewer service, and emergency plumbing across Clovis and the Central Valley.",
  keywords:
    "plumber Clovis CA, drain cleaning, water heater repair, leak repair, sewer service, emergency plumber, Goode Plumbing",
  metadataBase: new URL("https://goodeplumbingca.com"),
  openGraph: {
    title: "Goode Plumbing | Premium Plumbing in Clovis, CA",
    description:
      "Drain cleaning, water heaters, leak repair, sewer service, emergency plumbing, and trusted local service.",
    url: "https://goodeplumbingca.com",
    siteName: "Goode Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goode Plumbing | Premium Plumbing in Clovis, CA",
    description:
      "Licensed plumbing for Clovis and the Central Valley. Drain cleaning, water heaters, leak repair, and emergency service.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Goode Plumbing",
  url: "https://goodeplumbingca.com",
  telephone: "+15594511887",
  email: "info@goodeplumbing.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1044 San Jose Ave Ste 102",
    addressLocality: "Clovis",
    addressRegion: "CA",
    postalCode: "93612",
    addressCountry: "US",
  },
  areaServed: ["Clovis, CA", "Fresno, CA", "Madera, CA", "Sanger, CA", "Selma, CA"],
  serviceType: ["Drain cleaning", "Water heater repair", "Leak repair", "Sewer repair", "Emergency plumbing", "Commercial plumbing"],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "07:00", closes: "14:00" },
  ],
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "127" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-white selection:bg-brand-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
