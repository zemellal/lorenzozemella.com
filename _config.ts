import lume from "lume/mod.ts";
import sitemap from "lume/plugins/sitemap.ts";
import date from "lume/plugins/date.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "./src",
  location: new URL("https://www.lorenzozemella.com/"),
});

site.use(
  tailwindcss({
    // extensions: [".html", ".jsx", ".tsx"],
    options: {
      plugins: ["@tailwindcss/typography"],
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
site.use(sitemap());

site.copy("assets/fonts");

export default site;
