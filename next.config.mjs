/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/rick-morty' : '',
    output: 'export',
    assetPrefix: isProd ? '/rick-morty/' : '',
};

export default nextConfig;
