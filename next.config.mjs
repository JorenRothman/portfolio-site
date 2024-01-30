import million from 'million/compiler';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
};

export default million.next(nextConfig, { auto: { rsc: true } });
