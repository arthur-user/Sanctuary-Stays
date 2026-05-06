/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'badztcmwftexfhbigcfb.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    qualities: [75, 80],
  },

  reactCompiler: true,
  //output: "export",
};

export default nextConfig;