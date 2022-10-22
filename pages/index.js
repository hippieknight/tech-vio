import ScrollButton from "../public/components/_common/scroll/ScrollButton";
import Header from "../public/components/_layout/header/Header";
import HomePage from "./homepage/index";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <ScrollButton />
    </>
  );
}
