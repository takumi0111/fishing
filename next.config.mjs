/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript エラーがあってもビルドを続行する
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
