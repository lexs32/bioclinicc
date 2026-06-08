import "./global.css";

export const metadata = {
  title: "Laboratoire BIOCLINIC Rabat Agdal | Analyses Médicales",
  description: "Laboratoire d'analyses médicales BIOCLINIC à Agdal, Rabat. Examens biologiques de routine et spécialisés, prélèvement à domicile, résultats en ligne sécurisés 24/7.",
  keywords: [
    "Laboratoire Bioclinic",
    "Bioclinic Rabat",
    "Laboratoire Agdal",
    "Analyses médicales Rabat",
    "Prélèvement à domicile Rabat",
    "Laboratoire d'analyses Rabat",
    "Résultats d'analyses en ligne",
    "Hématologie Rabat",
    "Biochimie Rabat",
    "Bilan de santé Rabat"
  ],
  alternates: {
    canonical: "https://bioclinicc.vercel.app",
  },
  openGraph: {
    title: "Laboratoire BIOCLINIC Rabat Agdal | Analyses Médicales",
    description: "Laboratoire d'analyses médicales de haute précision à Agdal, Rabat. Prélèvement à domicile & résultats sécurisés en ligne.",
    url: "https://bioclinicc.vercel.app",
    siteName: "Laboratoire BIOCLINIC",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://dtvoeevhaseb5.cloudfront.net/user-uploads/6fe0c236-cd72-4b61-bdfa-e16b1f68d613.png",
        width: 1200,
        height: 630,
        alt: "Laboratoire BIOCLINIC Rabat",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratoire BIOCLINIC Rabat Agdal | Analyses Médicales",
    description: "Prélèvement à domicile et analyses médicales de haute précision à Agdal, Rabat.",
    images: ["https://dtvoeevhaseb5.cloudfront.net/user-uploads/6fe0c236-cd72-4b61-bdfa-e16b1f68d613.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const GLOBAL_GUARD_CSS = `
  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #FAF9F9;
  }
  .display-editorial-heavy {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 800 !important;
    letter-spacing: -0.03em !important;
    line-height: 1.05 !important;
    text-transform: none !important;
  }
`;

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Laboratoire BIOCLINIC d'analyses médicales - Rabat Agdal",
  "image": "https://dtvoeevhaseb5.cloudfront.net/user-uploads/6fe0c236-cd72-4b61-bdfa-e16b1f68d613.png",
  "@id": "https://bioclinicc.vercel.app/#clinic",
  "url": "https://bioclinicc.vercel.app",
  "telephone": "+212537682525",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "64 Avenue Omar Ibn El Khattab, Angle Avenue Atlas, Agdal",
    "addressLocality": "Rabat",
    "postalCode": "10000",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.9974556",
    "longitude": "-6.8461093"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap"
        />
        <style dangerouslySetInnerHTML={{ __html: GLOBAL_GUARD_CSS }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
