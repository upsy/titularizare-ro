import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "tit-auth";
const AUTH_VALUE = "ok";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/login")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
    return response;
  }

  const cookie = request.cookies.get(AUTH_COOKIE);
  if (cookie?.value === AUTH_VALUE) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = "/login";
  const from = pathname + (request.nextUrl.search ?? "");
  if (from && from !== "/" && !from.startsWith("/login")) {
    url.searchParams.set("from", from);
  } else {
    url.searchParams.delete("from");
  }
  const response = NextResponse.redirect(url);
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|audio/|images/|.*\\..*).*)",
  ],
};
