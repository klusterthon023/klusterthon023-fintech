import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

function HeroSection() {
  return (
    <section className="grid md:grid-cols-2 gap-4 container mx-auto px-4 md:px-0 py-12">
    <HeroText />
    <HeroImg />
    </section>
  )
}

export default HeroSection;
