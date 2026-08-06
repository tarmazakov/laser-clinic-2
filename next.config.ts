import type { NextConfig } from "next";

// Detect repo name automatically when building inside GitHub Actions
// (GITHUB_REPOSITORY is "owner/repo"). User/organization pages
// (repo named "<user>.github.io") are served at the domain root and
// need no basePath; project pages are served at "/<repo>/".
const repoFromEnv = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrgPage = repoFromEnv?.endsWith(".github.io");
const inferredBasePath = repoFromEnv && !isUserOrgPage ? `/${repoFromEnv}` : "";

// Allows overriding manually, e.g. NEXT_BASE_PATH=/my-repo npm run build
const basePath = process.env.NEXT_BASE_PATH ?? inferredBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
