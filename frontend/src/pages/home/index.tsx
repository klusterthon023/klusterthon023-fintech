import Header from "../../components/header";
import CarryOutTractions from "./components/carry-out-transaction";
import AboutUs from "./components/about-us";
import HeroSection from "./components/hero-section";
import WhatWeDoSection from "./components/what-we-do-section";
import KeyFeatures from "./components/key-features";
import PlanAndPricing from "./components/plan-and-pricing";
import QuestionAndAnswer from "./components/question-and-answer";
import Footer from "../../components/footer";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const path = location?.state?.path;

  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      navigate(location.pathname, {});
    }
  };

  useEffect(() => {
    if (path) {
      setTimeout(() => scrollToSection(path), 100);
    }
  }, [path]);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <AboutUs />
      <KeyFeatures />
      <CarryOutTractions />
      <PlanAndPricing />
      <QuestionAndAnswer />
      <Footer />
    </div>
  );
}

export default HomePage;
