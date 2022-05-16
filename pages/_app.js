import { PortfolioProvider } from "../context/context";
import { prefix } from "../config/config";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <PortfolioProvider value={{ prefix }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioProvider>
  );
}
