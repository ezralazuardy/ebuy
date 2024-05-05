import { NextRequest, NextResponse } from "next/server";
import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired(async (request: NextRequest) => {
  // get the response object
  const response = NextResponse.next();

  // get the user session
  const user = await getSession(request, response);

  // if user is not logged in, redirect to the login page
  if (!user) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  // if the user is logged in, continue to the next middleware
  if (request.nextUrl.pathname !== "/products") {
    return NextResponse.redirect(new URL("/products", request.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/", "/products"],
};
