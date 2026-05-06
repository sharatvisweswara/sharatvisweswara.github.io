// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://sharatvisweswara.github.io',
	integrations: [mdx(), sitemap()],
});
