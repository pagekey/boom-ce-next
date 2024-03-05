import Layout from "@/components/Layout";
import "@/styles/globals.css";
import '@mantine/core/styles.css';
import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from '@mantine/core';
import { trpc } from "@/util/trpc";


const theme = createTheme({
  primaryColor: 'violet',
});

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
};

export default trpc.withTRPC(App);
