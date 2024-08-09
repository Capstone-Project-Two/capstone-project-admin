import { ROUTER_PATH } from "@/constants/route-constant";
import { adminLogin } from "@/service/auth-service";
import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      username: string;
      roles: Array<string>;
      credential: {
        email?: string;
        password?: string;
      };
      refresh_token: string;
    } & DefaultSession["user"];
  }

  interface User {
    username: string;
    credential: {
      email: string;
      password: string;
    };
    roles: Array<string>;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
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
          });

          if (user.data?.admin) {
            return user.data?.admin;
          }

          return null;
        } catch (e) {
          console.log(e);
          throw e;
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
});
