import AboutUsImage from "./AboutUs-Image";
import AboutUsText from "./AboutUsText";

export default function AboutUs() {
  return (
    <section id="About Us" className="py-8 px-4 bg-gradient mt-[11%]">
      <div className=" container mx-auto grid lg:grid-cols-2 items-center gap-4">
        <AboutUsImage />
        <AboutUsText />
      </div>
    </section>
  );
}
