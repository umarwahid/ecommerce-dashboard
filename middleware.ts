import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
// export default authMiddleware({
//   publicRoutes: ['/api/:path*']
// });
 
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
// import { authMiddleware } from "@clerk/nextjs";

// Define the routes that should be public
export default authMiddleware({
  secretKey: process.env.CLERK_SECRET_KEY,
  publicRoutes: [
    "/", 
    "/6649e77412224e43856b6a7b/categories", // Public routes
    "/api/:path*", // Public API routes
    "/sign-in", // Add sign-in page if it's not protected
    "/sign-up"  // Add sign-up page if it's not protected
  ],
  debug: true,
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Matches all paths except static files and _next
    "/",
    "/(api|trpc)(.*)" // Matches API and trpc routes
  ],
};
