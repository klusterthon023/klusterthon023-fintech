import WhatWeDoCard from "./WhatWeDoCard";
import WhatWeDoTitle from "./WhatWeDoTitle";


export default function WhatWeDoSection() {
    return (
        <section className="container mx-auto py-12 grid gap-12">
        <WhatWeDoTitle />
        <WhatWeDoCard />
        </section>
    )
}