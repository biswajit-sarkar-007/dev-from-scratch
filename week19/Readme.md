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







