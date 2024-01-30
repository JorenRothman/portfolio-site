import million from 'million/compiler';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                hostname: 'via.placeholder.com',
            },
        ],
    },
};

export default million.next(nextConfig, { auto: { rsc: true } });
