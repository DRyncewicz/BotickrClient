import NextAuth from "next-auth";
import https from 'https';
import Duende from "next-auth/providers/duende-identity-server6"
const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

export const authOptions = {
    providers: [
        Duende({
            id: "duende-identity-server6",
            name: "Duende IdentityServer6",
            type: "oauth",
            wellKnown: process.env.NEXT_PUBLIC_IDENTITY_SERVER_WELLKNOWN,
            authorization: { params: { scope: process.env.NEXT_PUBLIC_IDENTITY_SERVER_SCOPES_STRING } },
            clientId: process.env.NEXT_PUBLIC_IDENTITY_SERVER_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_IDENTITY_SERVER_CLIENT_SECRET,
            checks: ["pkce", "state"],
            httpOptions: { agent: httpsAgent },
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                }
            },
        }),
    ],
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    debug: true,
    callbacks: {
        async jwt({ token, user, account, profile }) {
            if (profile) {
                token = { ...token, ...profile };
            }
            return token;
        },
        async session({ session, token }) {
            session.user = { ...session.user, ...token };
            return session;
        },
    },
    logger: {
        error: (code, metadata) => {
            console.error("NextAuth Error:", code, metadata);
        },
        warn: (code) => {
            console.warn("NextAuth Warning:", code);
        },
        debug: (code, metadata) => {
            console.debug("NextAuth Debug:", code, metadata);
        },
    },
    events: {
        async signIn(message) { console.log("Signed in", message) },
        async signOut(message) { console.log("Signed out", message) },
        async error(message) { console.log("Error", message) },
    },
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };