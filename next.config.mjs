/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'unsplash.com',
            pathname: '/**',
          },
        ],
    },
    eslint: {
        dirs: ['src/!(components/ui)/**']
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://petsociety-production.up.railway.app/:path*'
            }
        ]
    }
};

export default nextConfig;
