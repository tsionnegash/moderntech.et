// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@/styles/index.css"; // ← change this to your actual CSS path, e.g. "../src/index.css"
import { Toaster } from "@/components/ui/toaster";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}

export default MyApp;
