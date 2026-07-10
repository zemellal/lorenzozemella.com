// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "static",
	prefetch: {
		// Prefetch links as they enter the viewport so the next page is
		// already in the browser cache before it is clicked.
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	experimental: {
		// Chromium browsers fully prerender the next page via the
		// Speculation Rules API (0ms navigation); others fall back to
		// the regular prefetch above.
		clientPrerender: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
