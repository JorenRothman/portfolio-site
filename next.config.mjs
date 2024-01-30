import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default million.next(nextConfig, { auto: { rsc: true } });
