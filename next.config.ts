import withMDX from '@next/mdx';

const nextConfig = withMDX()({
    // MDX dışında diğer uzantılar
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true, // React hata ayıklama modu
});

export default nextConfig;
