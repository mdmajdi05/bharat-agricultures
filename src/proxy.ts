import { NextResponse, type NextRequest } from "next/server";

const locales = ["en", "hi"] as const;
type Locale = (typeof locales)[number];

const localeCookie = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax" as const,
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, firstSegment, ...remainingSegments] = pathname.split("/");
  const remainingPath = remainingSegments.join("/");

  if (locales.includes(firstSegment as Locale)) {
    const locale = firstSegment as Locale;

    // Hinglish is the default language, so /hi/* should never stay in the URL.
    if (locale === "hi") {
      const destination = request.nextUrl.clone();
      destination.pathname = remainingPath ? `/${remainingPath}` : "/";

      const response = NextResponse.redirect(destination);
      response.cookies.set("ba-locale", "hi", localeCookie);
      return response;
    }

    // English keeps its /en prefix and is rewritten to the shared app tree.
    const destination = request.nextUrl.clone();
    destination.pathname = remainingPath ? `/${remainingPath}` : "/";

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-ba-locale", locale);

    const response = NextResponse.rewrite(destination, {
      request: { headers: requestHeaders },
    });
    response.cookies.set("ba-locale", locale, localeCookie);
    return response;
  }

  // The homepage is always the default (Hinglish) page at "/" — no /en or /hi redirect.
  if (pathname === "/") {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-ba-locale", "hi");
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.cookies.set("ba-locale", "hi", localeCookie);
    return response;
  }

  // Keep English navigation working for the existing unprefixed internal links.
  if (request.cookies.get("ba-locale")?.value === "en") {
    const destination = request.nextUrl.clone();
    destination.pathname = `/en${pathname}`;
    return NextResponse.redirect(destination);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-ba-locale", "hi");
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.cookies.set("ba-locale", "hi", localeCookie);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
