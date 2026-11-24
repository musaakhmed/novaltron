import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async headers() {
    const noIndexHeaders = [
      {
        key: "X-Robots-Tag",
        value: "noindex, nofollow",
      },
    ];
    return [
      {
        source: "/card",
        headers: noIndexHeaders,
      },
      {
        source: "/card/:path*",
        headers: noIndexHeaders,
      },
      {
        source: "/api/vcard",
        headers: noIndexHeaders,
      },
      {
        source: "/api/vcard/:path*",
        headers: noIndexHeaders,
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
