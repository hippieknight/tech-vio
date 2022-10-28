import BannerServices from "../../public/components/pages/services/banner/Banner";
import WhatWeProvide from "../../public/components/pages/homepage/what-we-provide/WhatWeProvide";
import WhyChooseUs from "../../public/components/pages/homepage/why-choose-us/WhyChooseUs";
import WhyTrustUs from "../../public/components/pages/homepage/why-trust-us/WhyTrustUs";
import WorkWithUs from "../../public/components/pages/homepage/work-with-us/WorkWithUs";

export default function AboutUsPage() {
  return (
    <>
      <BannerServices />
      <WhatWeProvide />
      <WorkWithUs />
      <WhyChooseUs />
      <WhyTrustUs />
    </>
  );
}
