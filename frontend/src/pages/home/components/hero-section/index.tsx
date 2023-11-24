import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

function HeroSection() {
  return (
    <section
      id="Home"
      className=" bg-union bg-no-repeat bg-top bg-opacity-70 mx-auto"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 px-4 md:px-0 py-12">
        <HeroText />
        <HeroImg />
      </div>
    </section>
  );
}

export default HeroSection;
