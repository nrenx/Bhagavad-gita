import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const FALLBACK_BASE_URL = "https://bhagavad-gita.org";
const RAW_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || FALLBACK_BASE_URL;

let parsedBaseUrl: URL;

try {
  parsedBaseUrl = new URL(RAW_BASE_URL);
} catch {
  parsedBaseUrl = new URL(FALLBACK_BASE_URL);
}

export const SITE_BASE_ORIGIN = parsedBaseUrl.origin;
export const SITE_BASE_PATH = parsedBaseUrl.pathname.replace(/\/$/, "");
export const SITE_BASE_URL = `${SITE_BASE_ORIGIN}${SITE_BASE_PATH || ""}`;

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
