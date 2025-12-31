/** @type {import('next').NextConfig} */
const repo = "crystals-cleaning-painting";
const isGitHub = process.env.GITHUB_ACTIONS === "true";

export default {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHub ? `/${repo}` : "",
  assetPrefix: isGitHub ? `/${repo}/` : undefined,
};
