// @ts-check

import cloudflare from "@astrojs/cloudflare";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, sessionDrivers } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: cloudflare({
		// Optimize images at build time instead of binding Cloudflare Images.
		imageService: "compile",
	}),
	session: {
		// Sessions are unused; the null driver avoids the adapter
		// provisioning a Workers KV namespace for them.
		driver: sessionDrivers.null(),
	},
	cache: {
		provider: cacheCloudflare(),
	},
	routeRules: {
		// Workers Cache keys entries by Worker version, so every deploy
		// starts a fresh cache and content is never stale. The TTL only
		// bounds how long pages stay cached between deploys; swr keeps
		// serving stale copies while re-rendering in the background.
		"/[...path]": { maxAge: 604800, swr: 86400 },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
