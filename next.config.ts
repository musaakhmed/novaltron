import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/about-delivery",
        destination: "/en/about",
        permanent: true,
      },
      {
        source: "/:lang(en|az|tr|ru)/about-delivery",
        destination: "/:lang/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
