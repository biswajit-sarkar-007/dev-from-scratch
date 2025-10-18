### Advanced Paytm project part 1

##### Points

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
 
 
### Feature planning

comming soon...


### Stack

1.Frontend and Backend - Next.js (or Backend)

2.Express - Auxilary backends

3.Turborepo

4.Postgres Database

5.Prisma ORM

6.Tailwind



### Bootstrape the app

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



### Adding prisma

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



### Add a recoil/store module

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
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "recoil": "^0.7.7"
  },
  "exports": {
    "./useBalance": "./src/hooks/useBalance"
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


 







