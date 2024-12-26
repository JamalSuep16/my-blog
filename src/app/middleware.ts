import { type NextRequest, NextResponse } from "next/server";
import path from "path";
import { decrypt } from "./_lib/session";

export default async function middleware(req: NextRequest) {
  // 1. Check if route is protected
  const protectedRoutes = ["/dashboard"];
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  if (isProtectedRoute) {
    // 2. Check for valid session
    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    // 3. Redirect unauthed users
    if (!session?.userId) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }
  // 4. Render route
  return NextResponse.next();
}

// Routes middleware should *not* run on
export const config = {
  matcher: ["/((?api|_next/static|_next/image).*)"],
};
