import SiteLayout from "../public/components/_layout/SiteLayout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;
