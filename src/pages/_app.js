import Layout from "@/components/Layout";
import { ThemeWrapper } from "@/context/ThemeContext";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LightTheme, DarkTheme } from "../util/theme";
import { useSSR } from "@nextui-org/react";
import MoneyDataWrapper from "@/context/MoneyDataWrapper";

export default function App({ Component, pageProps }) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <MoneyDataWrapper>
        <ThemeWrapper>
          <Layout>
            <NextThemesProvider
              defaultTheme="system"
              attribute="class"
              value={{
                light: LightTheme.className,
                dark: DarkTheme.className,
              }}
            >
              <NextUIProvider>
                <Component {...pageProps} />
              </NextUIProvider>
            </NextThemesProvider>
          </Layout>
        </ThemeWrapper>
      </MoneyDataWrapper>
    )
  );
}
