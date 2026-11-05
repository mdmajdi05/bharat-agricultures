import { headers } from "next/headers";

export type Locale = "en" | "hi";

export async function getLocale(): Promise<Locale> {
  return (await headers()).get("x-ba-locale") === "hi" ? "hi" : "en";
}

export function localizedPath(path: string, locale: Locale): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (locale === "hi") return normalizedPath;

  return normalizedPath === "/" ? "/en" : `/en${normalizedPath}`;
}

export function localizedAlternates(path: string) {
  return {
    "en-IN": localizedPath(path, "en"),
    "hi-Latn-IN": localizedPath(path, "hi"),
    "x-default": localizedPath(path, "hi"),
  };
}
