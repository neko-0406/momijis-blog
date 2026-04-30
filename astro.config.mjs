import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), keystatic(), react(), mermaid()],
    output: 'static',
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});