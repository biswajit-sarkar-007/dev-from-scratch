 # what are Middlewares ? 

Middlewares are code that runs before / after your request handler.
It’s commonly used for things like

 - 1.Analytics

 - 2.Authentication

 - 3.Redirecting the user


# middlewares 

Middleware allows you to run code before a request is completed. 

Then, based on the incoming request, you can modify the response by

 - 1.rewriting

 - 2.redirecting

 - 3.modifying the request or response headers
or responding directly.
 
### Use cases

 - Authentication and Authorization: Ensure user identity and check session cookies before granting access to specific pages or API routes.

 - Logging and Analytics: Capture and analyze request data for insights before processing by the page or API.
 


added this code in your next app inside the app dire in the main project added a file name middleware.ts/

```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let requestCount = 0;
export function middleware(request: NextRequest) {
  requestCount++;
  console.log("number of requests is " + requestCount);
  return  NextResponse.next()
}

```

added this to restrict the middlware call for every url

```
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/signin/:path*',
}

```

## Selectively running middlwares 

```

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}

```


# server side rendering and client side rendering and static side generating


## client side rendering

Client-side rendering (CSR) is a modern technique used in web development where the rendering of a webpage is performed in the browser using JavaScript. Instead of the server sending a fully rendered HTML page to the client

Good example of CSR - React 

Let’s see a react project in action

 - Initialise a react project

 > npm create vite@latest

 - Add dependencies

 > npm i

 - Start the project

 > npm run build


 - Serve the project

 > cd dist/
 > serve


Open the network tab and notice how the inital HTML file deosn’t have any content


This means that the JS runs and actually p**opulates** / **renders** the contents on the page

React (or CSR) makes your life as a developer easy. You write components, JS renders them to the DOM.


## Downsides?

1.Not SEO optimised

2.User sees a flash before the page renders

3.Waterfalling problem

## Server side rendering

When the **rendering** process (converting JS components to HTML) happens on the server, it’s called SSR


Why SSR?

1.SEO Optimisations

2.Gets rid of the waterfalling problem

3.No white flash before you see content


Try creating a NextJS app and notice the HTML file you receive is populated

 - reate next app 

 > npx create-next-app

 - Build the project

 > npm run build

 - Start the NEXT Server

 > npm run start


Notice the initial HTML page is populated 

Downsides of SSR?

1.Expensive since every request needs to **render** on the server

2.Harder to scale, you can’t cache to CDNs



## Static side generation

If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page HTML is generated when you run **next build**. This HTML will then be reused on each request. It can be cached by a CDN.


### Why?
If you use static site generation, you can defer the expensive operation of rendering a page to the build time so it only happens once. 
 
### How?
Let’s say you have an endpoint that gives you all the global todos of an app.
By global todos  we mean that they are the same for all users, and hence this page can be statically generated


 - Create a fresh next project

 - Create todos/page.tsx

```

export default async function Blog() {
    const res = await fetch('https://sum-server.com/todos')

    const data = await res.json();
    const todos = data.todos;

    console.log("todos", );
    return <div>
        {todos.map((todo: any) => <div key={todo.id}>
            {todo.title}
            {todo.description}
        </div>)}
    </div>
    
}

```


 - Try updating the fetch requests

Clear cache every 10 seconds

```

const res = await fetch('https://sum-server.com/todos', {
    next: { revalidate: 10 }
});

```

Clear cache in a next action

```

import { revalidateTag } from 'next/cache'

const res = await fetch('https://sum-server.com/todos', { next: { tags: ['todos'] } })
```

```

'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function revalidate() {
  revalidateTag('todos')
}
 
```





