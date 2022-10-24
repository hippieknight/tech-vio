import BannerAboutUs from "../../public/components/pages/about-us/banner/Banner";
import AboutUs from "../../public/components/pages/homepage/about-us/AboutUs";
import Counter from "../../public/components/pages/homepage/counter/Counter";
import OurCustomer from "../../public/components/pages/homepage/our-customer/OurCustomer";
import OurTeam from "../../public/components/pages/homepage/our-team/OurTeam";
import Testimonial from "../../public/components/pages/homepage/testimonial/Testimonial";
import WorkWithUs from "../../public/components/pages/homepage/work-with-us/WorkWithUs";

export default function AboutUsPage() {
  return (
    <>
      <BannerAboutUs />
      <AboutUs />
      <Counter />
      <OurTeam />
      <Testimonial />
      <WorkWithUs />
      <OurCustomer />
    </>
  );
}
