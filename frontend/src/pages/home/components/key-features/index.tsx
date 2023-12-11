import Features from "./Features";
import KeyFeaturesText from "./KeyFeaturesText";
import KeyFeaturesVideo from "./KeyFeaturesVideo";

export default function KeyFeatures() {
  return (
    <div id="Features" className="space-y-10 container mx-auto pt-12 px-2">
      <KeyFeaturesText />
      <div className="pb-[900px] max-lg:pb-[500px] max-md:pb-[400px] max-sm:pb-[300px] max-[400px]:pb-[200px]">
        <KeyFeaturesVideo />
      </div>
      <Features />
    </div>
  );
}
