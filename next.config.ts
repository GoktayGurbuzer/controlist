import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // MDX uzantılarını ekleyin
    experimental: {
        appDir: true, // App Router kullanımı için etkinleştirin
    },
});


export default nextConfig;
