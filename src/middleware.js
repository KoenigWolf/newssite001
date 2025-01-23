import { NextResponse } from 'next/server';

export async function middleware(request) {
  const token = request.cookies.get('authToken')?.value;
  const { pathname } = request.nextUrl;

  // ログインが必要な保護ルート
  const protectedRoutes = ['/admin', '/profile', '/settings'];

  // ログインページアクセス制御
  if (pathname.startsWith('/login')) {
    if (token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // 保護ルートアクセス制御
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*', 
    '/profile/:path*', 
    '/settings/:path*', 
    '/login', 
    '/integrations/:path*', 
    '/sports/:path*', 
    '/entertainment/:path*', 
    '/lifestyle/:path*', 
    '/technology/:path*'
  ]
};
