import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const GLOBAL_GUARD_CSS = `
  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    <>
      {/* Google Fonts: Inter (body) + Outfit 800/700 (premium curved heads) */}
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

      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
