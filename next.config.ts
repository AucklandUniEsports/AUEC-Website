import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the root to this repo; a stray lockfile higher up made Next pick the wrong one
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
