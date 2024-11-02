import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "~/app/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
	trustHost: true, // docker環境で利用するため
	debug: process.env.NODE_ENV !== "production",
	providers: [Google],
	adapter: PrismaAdapter(prisma),
});
