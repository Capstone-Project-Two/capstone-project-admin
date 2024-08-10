import { ROUTER_PATH } from "@/constants/route-constant";
import { adminLogin } from "@/service/auth-service";
import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  debug: process.env.ENV_MODE === "development",
  pages: {
    signIn: ROUTER_PATH.LOGIN,
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          name: "email",
        },
        password: {
          label: "Password",
          name: "password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        try {
          const user = await adminLogin({
            email: credentials.email as string,
            password: credentials.password as string,
          })
            .then((val) => {
              return val;
            })
            .catch((_) => {
              return null;
            });

          if (!user) {
            return null;
          }

          return user.data?.admin;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.credential.email;
        token.roles = user.roles;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username as string;
        session.user.roles = token.roles as Array<string>;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
