### Better Datafetching

For the root page, we are fetching the details of the user by hitting an HTTP endpoint in getUserDetails

*app/page.tsx/*

```

import axios from "axios";

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}

```


*getUserDetails* runs on the server. This means you’re sending a request from a server back to the server

### Better solution

*app/page.tsx/*

```
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
	  return {
      name: user?.username,
      email: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}

```

### Singleton prisma client


#### Avoid multiple Prisma Client instances

When developing a Next.js application, one common issue is accidentally creating multiple instances of the Prisma Client. This often occurs due to Next.js’s hot-reloading feature in development.

#### Why this happens

Next.js’s hot-reloading feature reloads modules frequently to reflect code changes instantly. However, this can lead to multiple instances of Prisma Client being created, which consumes resources and might cause unexpected behavior.

#### Recommended solution

To avoid this, create a single Prisma Client instance by using a global variable:


1.Create db/index.ts

2.Add a prisma client singleton inside it

```

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma

```

3.Update imports of prisma everywhere

  > import client from "@/db"

 

*Using this approach ensures that only one instance of Prisma Client exists, even during hot-reloading in development.


### server actions

Right now, we wrote an *API endpoint* that let’s the user sign up

```
export async function POST(req: NextRequest) {
    const body = await req.json();
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}

```

What if you could do a simple function call (even on a *client component*  that would run on the server?) (similar to *RPC* )

 > Under the hood, still an HTTP request would go out. But you would feel like you’re making a function call

### Steps to follow

1.Create *actions/user.ts* file (you can create it in a different folder)

2.Write a function that takes *username* and *password* as input and stores it in the DB

```

"use server"

import client from "@/db"

export async function signup(username: string, password: string) {
 
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    console.log(user.id);

    return "Signed up!"
}

```

3.Update the Signup.tsx file to do the function call

```

import { signup } from "@/actions/user";;

......

<button onClick={async () => {
    const response = await signup(username, password);
    localStorage.setItem("token", response);
    router.push("/")
}} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus

```

### Benefits of server actions
 - 1.Single function can be used in both client and server components

 - 2.Gives you types of the function response on the frontend (very similar to trpc)

 - 3.Can be integrated seamlessly with forms


