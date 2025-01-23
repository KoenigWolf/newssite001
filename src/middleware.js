import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-project-id", "5eba0f82-7272-41ca-a57e-b620fd20412d");

  request.nextUrl.href = `https://www.example.com${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}