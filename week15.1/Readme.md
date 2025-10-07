# Next js

### NextJS Intro

NextJS was a framework that was introduced because of some _minor inconviniences_ in React

- 1.In a React project, you have to maintain a separate Backend project for your API routes
- 2.React does not provide out of the box routing (you have to use react-router-dom)
- 3.React is not SEO Optimised
  - i.not exactly true today because of React Server components
  - ii.we’ll discuss soon why
- 4.Waterfalling problem

### SEO Optimisation

Google/Bing has a bunch of _crawlers_ that hit websites and figure out what the website does.
It ranks it on _Google_ based on the HTML it gets back
The crawlers _DONT_ usually run your JS and render your page to see the final output.

### Try visiting a react website

What does the _Googlebot_ get back when they visit a website written in react?

> Googlebot has no idea on what the project is. It only sees _Vite + React + TS_ in the original HTML response.
> Ofcourse when the JS file loads eventually, things get
> rendered but the _Googlebot_ doesn’t discover this content very well.

### Waterfalling problem

Let’s say you built a blogging website in react, what steps do you think the request cycle takes?

1.Fetching the index.html from the CDN
2.Fetching script.js from CDN
3.Checking if user is logged in (if not, redirect them to /login page)
4.Fetching the actual blogs
There are 4 round trips that happen one after the other (sequentially)

### Next.js offerings

Next.js provides you the following _upsides_ over React

- 1.Server side rendering - Get’s rid of SEO problems
- 2.API routes - Single codebase with frontend and backend
- 3.File based routing (no need for react-router-dom)
- 4.Bundle size optimisations, Static site generation
- 5.Maintained by the Vercel team

Downsides -

- 1.Can’t be distributed via a CDN, always needs a server running that does _server side rendering_ and hence is expensive
- 2.Very opinionated, very hard to move out of it

#### Commend for bootstrape a nextjs app:

> npx create-next-app@latest

in next js there basically file based routing like :
inside app folder , /signup/page.tsx: write some code here

now visit http://localhost:3000/signup

### Merging routes

layout.tsx used same structure of all file :

#### Approach #1

Move both the signin and signup folder inside a auth folder where we have the layout

/auth ---/signup/page.tsx
---/signin/page.tsx
---layout.tsx

You can access the routes at

> http://localhost:3000/auth/signup and
> http://localhost:3000/auth/signin

#### Approach #2

You can use create a new folder with () around the name.
This folder is ignored by the router.

/(auth) ---/signup/page.tsx
---/signin/page.tsx
---layout.tsx

\*(auth) would be not visible if we used there `()`

You can access the routes at

> http://localhost:3000/signup and
> http://localhost:3000/signin

### components directory

You should put all your components in a components directory and use them in the app routes rather than shoving everything in the route handler

1.Create a new folder called components in the root of the project
2.Add a new component there called Signin.tsx
3.Move the signin logic there
4.Render the Signin component in app/(auth)signin/page.tsx

### client and server side components

NextJS expects you to identify all your components as either _client_ or _server_

As the name suggests

- 1.Server components are rendered on the server
- 2.Client components are pre-rendered and are pushed to the client to be rendered again

By default, all components are _server_ components.
If you wan’t to mark a component as _client_ component,you need to add the following to the top of the component -

> "use client"

When should you create client components ?

- 1.Whenever you get an error that tells you that you need to create a client component
- 2.Whenever you’re using something that the server doesn’t understand (useEffect, useState, onClick…)
