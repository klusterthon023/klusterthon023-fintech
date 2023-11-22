import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

function HeroSection() {
  return (
    <section className="grid md:grid-cols-2 gap-4 container mx-auto p-12">
    <HeroText />
    <HeroImg />
    </section>
  )
}

export default HeroSection;
