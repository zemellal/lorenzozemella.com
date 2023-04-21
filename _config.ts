import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "./src",
});

site.use(
  tailwindcss({
    // extensions: [".html", ".jsx", ".tsx"],
    options: {
      theme: {
        fontFamily: {
          sans: ["Nunito", "sans-serif"],
          serif: ["Merriweather", "serif"],
        },
      },
    },
  })
);
site.use(postcss());
site.use(date());

site.copy("assets/fonts");

export default site;
