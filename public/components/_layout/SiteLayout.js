import ScrollButton from "../_common/scroll/ScrollButton";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const SiteLayout = ({ children }) => (
  <>
    <Header />
    <ScrollButton />
    {children}
    <Footer />
  </>
);

export default SiteLayout;
