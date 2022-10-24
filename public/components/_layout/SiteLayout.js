import ScrollButton from "../_common/scroll/ScrollButton";
import Header from "./header/Header";

const SiteLayout = ({ children }) => (
  <>
    <Header />
    <ScrollButton />
    {children}
  </>
);

export default SiteLayout;
