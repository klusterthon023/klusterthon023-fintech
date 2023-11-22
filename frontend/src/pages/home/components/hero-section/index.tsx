import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

function HeroSection() {
  return (
    <section className=" bg-hero bg-opacity-70 mx-auto">
      <div className=" container mx-auto grid lg:grid-cols-2 gap-4 px-4 md:px-0 py-12">
        <HeroText />
        <HeroImg />
      </div>
    </section>
  )
}

export default HeroSection;
