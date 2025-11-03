import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const FALLBACK_PUBLIC_ORIGIN = process.env.NEXT_PUBLIC_BASE_ORIGIN || "https://bhagavad-gita.org";
const RAW_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const ENV_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;

let parsedOrigin: string | undefined;
let derivedPath = "";

if (RAW_BASE_URL) {
  try {
    const parsed = new URL(RAW_BASE_URL);
    parsedOrigin = parsed.origin;
    derivedPath = parsed.pathname.replace(/\/$/, "");
  } catch (error) {
    console.warn("Invalid NEXT_PUBLIC_BASE_URL provided, falling back to defaults", error);
  }
}

let repoOwner: string | undefined;
let repoName: string | undefined;

if (GITHUB_REPOSITORY) {
  const [owner, name] = GITHUB_REPOSITORY.split("/");
  repoOwner = owner;
  repoName = name;
}

const githubOrigin = repoOwner ? `https://${repoOwner}.github.io` : undefined;
const githubBasePath = repoName ? `/${repoName}` : undefined;

const baseOrigin = parsedOrigin || githubOrigin || FALLBACK_PUBLIC_ORIGIN;
const basePath = (ENV_BASE_PATH ?? derivedPath ?? githubBasePath ?? "").replace(/\/$/, "");

export const SITE_BASE_ORIGIN = baseOrigin;
export const SITE_BASE_PATH = basePath;
export const SITE_BASE_URL = `${SITE_BASE_ORIGIN}${SITE_BASE_PATH || ""}`;

if (process.env.NODE_ENV !== "production") {
  console.debug("Site base configuration", {
    SITE_BASE_ORIGIN,
    SITE_BASE_PATH,
    SITE_BASE_URL,
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function withLeadingSlash(path: string): string {
  if (!path) {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function getAssetPath(path: string): string {
  if (!path) {
    return SITE_BASE_PATH || "/";
  }

  const normalizedPath = withLeadingSlash(path);
  const combinedPath = `${SITE_BASE_PATH}${normalizedPath}`;
  return combinedPath || normalizedPath;
}

export function getAssetUrl(path: string): string {
  const assetPath = getAssetPath(path);

  if (assetPath === "/" || assetPath === "") {
    return `${SITE_BASE_ORIGIN}/`;
  }

  return `${SITE_BASE_ORIGIN}${assetPath}`;
}

export function getRoutePath(path: string = "/"): string {
  if (!path || path === "/" || path === "./") {
    return SITE_BASE_PATH || "/";
  }

  if (path.startsWith("http")) {
    try {
      const url = new URL(path);
      return url.pathname || "/";
    } catch {
      return "/";
    }
  }

  let normalizedPath = path.startsWith("./") ? path.slice(1) : path;
  normalizedPath = withLeadingSlash(normalizedPath);

  const combinedPath = `${SITE_BASE_PATH}${normalizedPath}`;
  return combinedPath || normalizedPath;
}

export function getRouteUrl(path: string = "/"): string {
  if (path && path.startsWith("http")) {
    return path;
  }

  const routePath = getRoutePath(path);
  const isRoot = !path || path === "/" || path === "./";

  if (routePath === "/") {
    return `${SITE_BASE_ORIGIN}/`;
  }

  if (isRoot) {
    return `${SITE_BASE_ORIGIN}${routePath}${routePath.endsWith("/") ? "" : "/"}`;
  }

  return `${SITE_BASE_ORIGIN}${routePath}`;
}
