import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev server only trusts localhost; allow the local nginx domain
  // (nginx/khayou.test.conf) so hot reload and dev assets aren't blocked.
  allowedDevOrigins: ["khayou.test"],
};

export default nextConfig;
