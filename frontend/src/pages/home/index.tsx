import Header from "../../components/header";
import CarryOutTractions from "./components/carry-out-transaction";
import HeroSection from "./components/hero-section";
import WhatWeDoSection from "./components/what-we-do-section";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <CarryOutTractions />
    </>
  );
}

export default HomePage;
