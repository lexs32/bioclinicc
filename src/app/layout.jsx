import "./global.css";

export const metadata = {
  title: "Laboratoire BIOCLINIC | Analyses Médicales Rabat Agdal",
  description: "Laboratoire d'analyses médicales à Agdal, Rabat. Analyses de routine et spécialisées, prélèvement à domicile, résultats en ligne.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
