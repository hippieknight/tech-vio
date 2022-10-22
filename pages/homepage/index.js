import AboutUs from "../../public/components/pages/homepage/about-us/AboutUs";
import HomeBanner from "../../public/components/pages/homepage/banner/Banner";
import WhatWeProvide from "../../public/components/pages/homepage/what-we-provide/WhatWeProvide";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <WhatWeProvide />
      <AboutUs />
    </>
  );
}
