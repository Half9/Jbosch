import { createPrismic } from "@prismicio/vue";

import { linkResolver } from "./linkResolver";

const prismic = createPrismic({
  endpoint: "jbosch",
  linkResolver,
});

export default prismic;