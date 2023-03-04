import BannerAboutUs from "../../public/components/pages/about-us/banner/Banner";
import RecentWorks from "../../public/components/pages/projects/recent-works/RecentWorks";


export default function AboutUsPage() {
    return <>
      <BannerAboutUs sectionTitle='Projects' />
      <RecentWorks/>
    </>
}