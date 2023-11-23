import hero_image from "../../../../assets/home/hero-img.svg";

export default function HeroImg() {
  return (
    <img
      data-aos-duration="5000"
      data-aos="zoom-out-left"
      src={hero_image}
      alt="hero"
    />
  );
}
