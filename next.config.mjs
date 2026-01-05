/** @type {import('next').NextConfig} */
const repo = "crystals-cleaning-painting";
const isGitHub = process.env.GITHUB_ACTIONS === "true";
const explicitBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH;
const basePath = explicitBasePath ?? (isGitHub ? `/${repo}` : "");
const assetPrefix = basePath ? `${basePath}/` : undefined;

export default {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};
