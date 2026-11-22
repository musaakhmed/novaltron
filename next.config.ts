import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      {
        source: "/brand-studio",
        destination: "/brand-studio.html",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/brand-studio",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
      {
        source: "/brand-studio.html",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        ],
      },
    ];
  },
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
