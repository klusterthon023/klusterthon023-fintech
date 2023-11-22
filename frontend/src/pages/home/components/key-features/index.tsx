import Features from "./Features";
import KeyFeaturesText from "./KeyFeaturesText";
import KeyFeaturesVideo from "./KeyFeaturesVideo";


export default function KeyFeatures() {
    return (
        <section className="grid gap-10 container mx-auto pt-12 px-2">
            <KeyFeaturesText />
            <KeyFeaturesVideo />
            <Features />
        </section>
    )
}