/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
    styledComponents: {
      displayName: true,
      // Enabled by default.
      ssr: true,
    }
  },
};

export default nextConfig;
