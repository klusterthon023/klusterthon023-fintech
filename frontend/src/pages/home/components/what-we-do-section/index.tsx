import WhatWeDoCard from "./WhatWeDoCard";
import WhatWeDoTitle from "./WhatWeDoTitle";

export default function WhatWeDoSection() {
  return (
    <section className="container mx-auto px-4 py-12 grid gap-12">
      <WhatWeDoTitle />
      <WhatWeDoCard />
    </section>
  );
}
