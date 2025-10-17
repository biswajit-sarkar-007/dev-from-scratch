### what is next auth?

NextAuth is a library that lets you do *authentication* in Next.js

Can you do it w/o next-auth - Yes

Should you - Probably not!

Popoular choices while doing auth include - 

 - 1.External provider - 

         -   https://auth0.com/
         -   https://clerk.com/
         -   Firebase auth

 - 2.In house using cookies

 - 3.NextAuth

### NextAuth

Nextjs lets you add *Authentication* to your Next.js app

1.It supports various providers

  - Login with email

  - Login with google

  - Login with facebook
  

### Next-auth access to a catch-all

1.Create /api/auth/[…nextauth]/route.ts

2.install next-auth

> npm install next-auth

3.Updated handler

```
import NextAuth from "next-auth"

const handler = NextAuth({
  ...........
})

export { handler as GET, handler as POST }


```


4.Adding providers - There are three broad types of providers

 - OAuth (Login with google)

 - Email (Passwordless Email login via email OTP)

 - Credentials (your own strategy)

Let’s them one by one


1.Craedentials

```

import CredentialsProvider from 'next-auth/providers/credentials';

export const NEXT_AUTH_CONFIG = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials: any) {
              return {
                  id: "user1",
                  name: "asd",
                  userId: "asd",
                  email: "ramdomEmail"
              };
          },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
        if (user) {
            token.uid = user.id;
        }
        return token;
        },
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
  }

```

#### Adding google provider

```
import GoogleProvider from "next-auth/providers/google";
...
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
]
...
```

in .env file used GoogleClientId, GoogleClientSecret

#### Adding Github provider

```
import GitHubProvider from "next-auth/providers/github";
...
providers: [
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })
]
...
```
in .env file used  GithubClientId,  GithubClientSecret