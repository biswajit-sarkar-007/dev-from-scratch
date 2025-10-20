# Advanced Paytm project part 1

### Points

1.Where to start - Feature planning

2.Design UI/UX:

             - UX - First principles/Copy the biggest website out there

             - UI - Designer. Today there are tools but havent found any good one

3.High level Design

   i.Auth provider

   ii.Database

   iii.Backend Stack

   iv.Frontend stack

   v.Modules you’ll have (common/ui/backend)

   vi.Cloud to deploy to

4.LLD

   1.Schema

   2.Route signatures

   3.Frontend Components - debatable

5.ER Diagrams - 

   1.We can build these today, but usually not needed unless you’re a very visual person

6.How to think about features

  1.Usually come from product

   2.If you’re a founder, then just whatever u think is right

7.How much complexity is needed

   1.Depends on the size of the company. For a startup, whatever helps you move fast w/o tech debt. For a company there are a lot of layers of review to go through
 
 
# Feature planning

comming soon...


# Stack

1.Frontend and Backend - Next.js (or Backend)

2.Express - Auxilary backends

3.Turborepo

4.Postgres Database

5.Prisma ORM

6.Tailwind



# Bootstrape the app

1.Init turborepo

 > npx create-turbo@latest

2.Rename the two Next apps to

 - user-app

 - merchant-app

3.Add tailwind to it. (*pls used v3.4.17)

step i: Install Tailwind CSS

```
npm install -D tailwindcss@3
npx tailwindcss init

```

step ii:Configure your template paths

```

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


```
 
step iii: Update **global css** 

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```



[] i dont't know why i have to do this tailwind installation all steps twice



# Adding prisma

1.Create a new **db** folder

2.Initialise package.json

```
npm init -y
npx tsc --init

```

3.Update package.json

```

{
    "name": "@repo/db", ---> added this in palace of  "db"
    "version": "0.0.0",
    "dependencies": {
        "@prisma/client": "^5.11.0"
    },
    "devDependencies": {
        "prisma": "5.11.0"
    },
    "exports": {        ---> added this exports
        "./client": "./index.ts"
    }
}

```


4.Update tsconfig.json

```


{
    "extends": "@repo/typescript-config/react-library.json",
    "compilerOptions": {
      "outDir": "dist"
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
  }
  

```

5.Init prisma

6.npx prisma init

7.
   i.Start DB locally/on neon.db/on aiven

   ii.Update .env with the new database URL


8.Add a basic schema

```
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}

```


9.Migrate DB

> npx prisma migrate dev --name init

10.Generate Prisma client

> npx prisma generate


11.Update index.ts

 > export * from '@prisma/client';



12.Try adding **api/user/route.ts** 

```
import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "asd",
            name: "adsads"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}

```
13. then visit   http://localhost:3001/api/user this url and check your db



# Add a recoil/store module

 - Create store package

``` 
cd packages
mkdir store
npm init -y
npx tsc --init

```

 - Install dependencies

 > npm i recoil



 - Update tsconfig.json

```

{
    "extends": "@repo/typescript-config/react-library.json",
    "compilerOptions": {
      "outDir": "dist"
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
}

```

 - Update package.json

```

{
  "name": "@repo/store",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "recoil": "^0.7.7"
  },
  "exports": {
    "./balance": "./src/hooks/useBalance"
  }
}


```


 - Create a simple **atom** called balance in **src/atoms/balance.ts**



```

import { atom } from "recoil";

export const balanceAtom = atom<number>({
    key: "balance",
    default: 0,
})

```

 - Create a simple hook called **src/hooks/useBalance.ts**

``` 
import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms/balance"

export const useBalance = () => {
    const value = useRecoilValue(balanceAtom);
    return value;
}   

```

[] just s small recap what's are bascially atom:

In Recoil, an atom is the smallest unit of state — basically, a piece of shared state that any React component can read from and write to.

React’s useState → Local to a single component.

Recoil’s atom → Global and can be shared across multiple components.


# Import recoil in the next.js apps 

 

 - Install recoil in them

 > npm i recoil

 - Add a **providers.tsx** file

```

"use client"
import { RecoilRoot } from "recoil";

export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
        {children}
    </RecoilRoot>
}

```

 - Update layout.tsx

```
 return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );

```


- Create a simple client component and try using the **useBalance** hook in there

 

```

"use client";

import { useBalance } from "@repo/store/useBalance";

export default function() {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}

```

# Add next-auth


### Database

Update the database schema

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id          Int      @id @default(autoincrement())
  email       String?  @unique
  name        String? 
  number      String  @unique
  password    String
}

// Merchant and AuthType added new
model Merchant {
  id          Int     @id @default(autoincrement())
  email       String  @unique
  name        String?
  auth_type   AuthType   
}

enum AuthType {
  Google
  Github
}

```

### User-app

 - Go to apps/user-app 

 - Initialize next-auth

 > npm install next-auth

 - Initialize a simple next auth config in **lib/auth.ts**

```

import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            phone: { label: "Phone number", type: "text", placeholder: "1231231231" },
            password: { label: "Password", type: "password" }
          },
          // TODO: User credentials type from next-aut
          async authorize(credentials: any) {
            // Do zod validation, OTP validation here
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const existingUser = await db.user.findFirst({
                where: {
                    number: credentials.phone
                }
            });

            if (existingUser) {
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                if (passwordValidation) {
                    return {
                        id: existingUser.id.toString(),
                        name: existingUser.name,
                        email: existingUser.number
                    }
                }
                return null;
            }

            try {
                const user = await db.user.create({
                    data: {
                        number: credentials.phone,
                        password: hashedPassword
                    }
                });
            
                return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.number
                }
            } catch(e) {
                console.error(e);
            }

            return null
          },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            session.user.id = token.sub

            return session
        }
    }
  }
 
```

 - Create a **/api/auth/[...nextauth]/route.ts**

```

import NextAuth from "next-auth"

import { authOptions } from "../../../../lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

```

- Update .env

```
JWT_SECRET=my-jwt-secret
NEXTAUTH_URL=http://localhost:3001

```

 - Ensure u see a signin page at http://localhost:3001/api/auth/signin


 
### Merchant-app

 - Create **lib/auth.ts**

```

import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/client";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
      async signIn({ user, account }: {
        user: {
          email: string;
          name: string
        },
        account: {
          provider: "google" | "github"
        }
      }) {
        console.log("hi signin")
        if (!user || !user.email) {
          return false;
        }

        await db.merchant.upsert({
          select: {
            id: true
          },
          where: {
            email: user.email
          },
          create: {
            email: user.email,
            name: user.name,
            auth_type: account.provider === "google" ? "Google" : "Github"  
          },
          update: {
            name: user.name,
            auth_type: account.provider === "google" ? "Google" : "Github"  
          }
        });

        return true;
      }
    },
    secret: process.env.NEXTAUTH_SECRET || "secret"
  }

```


 - Create a **/api/auth/[...nextauth]/route.ts**

```

import NextAuth from "next-auth"

import { authOptions } from "../../../../lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

```

 - Put your google client and secret in .env of the merchant app. 

Ref https://next-auth.js.org/providers/google

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=my-jwt-secrect

```

Ensure u see a signin page at http://localhost:3000/api/auth/signin

Try signing in and make sure it reaches the DB
 

# Add auth

### Client side

 - Wrap the apps around **SessionProvider** context from the next-auth package

[] SessionProvider in NextAuth.js is a React Context provider designed to make session data available throughout your application's client-side components.

 - Go to merchant-app/providers.tsx

```

"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>
}

```

 - Do the same for user-app/providers.tsx
 
 - Server side

Create apps/user-app/app/api/user/route.ts

```

import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export const GET = async () => {
    const session = await getServerSession(authOptions);
    if (session.user) {
        return NextResponse.json({
            user: session.user
        })
    }
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })
}

```
Ensure login works as exptected
 


# on Ramping


### Creating a bank_webhook_handler Node.js project

 - 1.Init node.js project + esbuild

```

cd apps
mkdir bank_webhook_handler
cd bank_webhook_handler
npm init -y
npx tsc --init
npm i esbuild express @types/express

```

 - 2.Update tsconfig

```

{
    "extends": "@repo/typescript-config/base.json",
    "compilerOptions": {
      "outDir": "dist"
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
  }

```

  
 - 3.Create src/index.ts

```

import express from "express"
import db from "@repo/db/client"

const app = express();

app.post("/",async (req,res)=>{
    // add validation endpoint here

    const paymentInformation = {
        token:req.body.token,
        userId:req.body.userId,
        amount:req.body.amount
    };

   await db.balance.update({
        where:{
            userId:paymentInformation.userId
        },
        data:{
            amount: {
                increment: paymentInformation.amount
            }
        }
    })

    await db.onRampTransaction.update({
        where:{
            token:paymentInformation.token
        },
        data:{
            status:"Success"
        }
    })

    res.json({
        msg:"captured!"
    })
    // uppdate balcane db 
}) 

```


 - 4.Update DB Schema

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id                Int                 @id @default(autoincrement())
  email             String?             @unique
  name              String?
  number            String              @unique
  password          String
  OnRampTransaction OnRampTransaction[]
  Balance           Balance[]
}

model Merchant {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  auth_type AuthType
}

model OnRampTransaction {
  id        Int          @id @default(autoincrement())
  status    OnRampStatus
  token     String       @unique
  provider  String
  amount    Int
  startTime DateTime
  userId    Int
  user      User         @relation(fields: [userId], references: [id])
}

model Balance {
  id     Int  @id @default(autoincrement())
  userId Int  @unique
  amount Int
  locked Int
  user   User @relation(fields: [userId], references: [id])
}

enum AuthType {
  Google
  Github
}

enum OnRampStatus {
  Success
  Failure
  Processing
}

```


- 5.Migrate the DB

```

Go to the right folder (packages/db)
npx prisma migrate dev --name add_balance
npx prisma generate

```

 - 6.Add repo/db as a dependency to packate.json

 > "@repo/db": "*"

 

Add transaction to update the balance and transactions DB
Ref - https://www.prisma.io/docs/orm/prisma-client/queries/transactions
import express from "express";
import db from "@repo/db/client";
const app = express();

app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
    //TODO: Add zod validation here?
    //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    try {
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        // You can also get this from your DB
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
        ]);

        res.json({
            message: "Captured"
        })
    } catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})

app.listen(3003);

 
Paytm Project
15 of 20

user_profile_image













 







 








