import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

function HeroSection() {
  return (
    <section id="Home" className="bg-hero bg-opacity-70 mx-auto">
      <div className="container mx-auto flex max-lg:flex-col gap-16 px-4 md:px-0 py-12">
        <HeroText />
        <HeroImg />
      </div>
    </section>
  );
}

export default HeroSection;
