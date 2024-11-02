import { authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "route";
import { auth } from "./auth";

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}

		return;
	}

	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL("/login", nextUrl));
	}

	return;
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
