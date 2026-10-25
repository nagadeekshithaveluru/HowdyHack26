import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingIncludes: {
    "/pinch_draw.html": ["./pinch_draw.html"],
  },
};

export default nextConfig;