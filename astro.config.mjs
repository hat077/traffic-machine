import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// This ensures your sitemap links point to the right place
	site: 'https://explainova.org',
	integrations: [mdx(), sitemap()],
});