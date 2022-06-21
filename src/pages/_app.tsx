import { ThemeProvider } from "styled-components";

import "bootstrap/dist/css/bootstrap.css";

import { GlobalStyles } from "../styles/globals";
import { theme } from "../styles/theme";
import { useMemo } from "react";

function MyApp({ Component, pageProps }: any) {
  const defaultTheme = useMemo(() => theme.darkTheme, [theme]);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
