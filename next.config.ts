import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const noIndexHeaders = [
      {
        key: "X-Robots-Tag",
        value: "noindex, nofollow",
      },
    ];
    const noIndexNoStoreHeaders = [
      {
        key: "X-Robots-Tag",
        value: "noindex, nofollow",
      },
      {
        key: "Cache-Control",
        value: "private, no-store, no-cache, max-age=0, must-revalidate",
      },
    ];
    return [
      {
        source: "/card",
        headers: noIndexHeaders,
      },
      {
        source: "/card/:path*",
        headers: noIndexNoStoreHeaders,
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
