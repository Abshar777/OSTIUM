
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {

    const isHome = req.nextUrl.pathname.startsWith("/root");
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth");


    const token = req.nextauth.token;
    const isLoggedIn = !!token;


    console.log("Middleware path:", req.nextUrl.pathname);

    if (isLoggedIn && isAuthPage) {
      return NextResponse.redirect(new URL("/root", req.url));
    }


    if (!isLoggedIn && isHome) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }



    return NextResponse.next();
  },
  {
    callbacks: {


      authorized: ({ token }) => {


        return true;
      },
    },
  }
);


export const config = {
  matcher: ["/root/:path*", "/auth/:path*"],
};