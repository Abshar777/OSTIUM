import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your@email.com" },
        name: { label: "Password", type: "password" },
        id: { label: "Id", type: "id" },
        role: { label: "Role", type: "role" },
      },
      async authorize(credentials) {
        console.log("authorize", credentials)
        if (!credentials?.email || !credentials?.name || !credentials.id ) {
          console.log("Email and name and id are required.");
          // throw new Error("Email and password are required.");
          return null;
        }

        // Mock user for now, replace with actual DB call
        const user = {
          id: credentials?.id,
          name: credentials.name,
          email: credentials.email as string,
          role: credentials.role as string
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    }),

  ],
  pages: {
    signIn: "/login" // Custom sign-in page
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any)?.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      baseUrl = process.env.NEXTAUTH_URL as string;
      console.log(baseUrl)
      // Redirect to home page after logout
      return url.startsWith(baseUrl) ? url : `${baseUrl}/auth/login`;
    },
  },

  secret: process.env.NEXTAUTH_SECRET || "secret"
};





declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    role?: string;
  }
}


declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    role?: string;
  }
}
