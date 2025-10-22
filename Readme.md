# 🚀 Full Stack Development Journey

> A comprehensive documentation of my full-stack web development learning path, from foundational concepts to advanced production-ready applications.

[![Learning Progress](https://img.shields.io/badge/Progress-Active-brightgreen)]()
[![Weeks Completed](https://img.shields.io/badge/Weeks-19+-blue)]()
[![Tech Stack](https://img.shields.io/badge/Stack-MERN%20%7C%20Next.js%20%7C%20TypeScript-orange)]()

---

##  About This Repository

This repository chronicles my journey through full-stack web development, starting from scratch and progressing to building production-grade applications. Each week focuses on specific technologies, concepts, and hands-on projects that build upon previous knowledge.

**Key Highlights:**
-  Structured week-by-week learning path
-  Hands-on projects and implementations
-  Modern tech stack (React, Next.js, Node.js, TypeScript, Prisma, PostgreSQL)
-  Real-world application development
-  Comprehensive documentation for each topic

---

##  Repository Structure

```
000 learning full stack/
├── week1.x/          # Foundation & JavaScript Basics
├── week2.x/          # Advanced JavaScript & Async Programming
├── week3.x/          # Backend Development with Node.js & Express
├── week4.x/          # Databases & MongoDB
├── week5.x/          # React Fundamentals
├── week6.x/          # Advanced React & State Management
├── week7.x/          # React Hooks & Custom Hooks
├── week8.x/          # Full Stack Projects & CRUD Operations
├── week9.x/          # Advanced Backend Concepts
├── week10.x/         # ORMs & Prisma
├── week11.x/         # Serverless & Cloud Deployment
├── week12.x/         # TypeScript Deep Dive
├── week13/           # Advanced TypeScript Concepts
├── week14.x/         # Next.js Framework
├── week15.x/         # Advanced Next.js Features
├── week16.x/         # Monorepos & Turborepo
├── week17/           # Production-Grade Paytm Clone
└── week19/           # Advanced Topics
```

---

##  Learning Path

### **Phase 1: Foundations (Weeks 1-2)**

#### [Week 1.2](./week1.2) - JavaScript Fundamentals
- Compiled vs Interpreted languages (C++ vs JS)
- Static vs Dynamic languages
- Single-threaded nature of JavaScript
- Simple primitives: variables (let, var, const), data types (string, boolean, number)
- Complex primitives: arrays and objects
- Array of objects pattern
- Functions: arguments, return values, callbacks
- setTimeout and setInterval

#### [Week 1.3](./week1.3) - String Methods & Parsing
- String operations: length, indexOf, lastIndexOf
- String manipulation: slice, substring, replace
- String utilities: split, trim, toUpperCase, toLowerCase
- parseInt for string to integer conversion
- Practical string handling exercises

#### [Week 1.4](./week1.4) - Loops, Functions & Callbacks
- For loops for repeated logic
- Function declaration and function calls
- DRY principle (Don't Repeat Yourself)
- Callback functions: calling functions inside functions
- Function composition patterns

#### [Week 1.5](./week1.5) - Async JavaScript & Promises
- Synchronous vs Asynchronous execution
- Context switching and parallel operations
- Async functions: setTimeout, fs.read, fetch
- Anonymous functions
- Promises: pending, resolve, reject states
- Promise as a wrapper over async operations
- Async/await syntax
- Callback hell and solutions

---

### **Phase 2: Backend Development (Weeks 2-4)**

#### [Week 2.1](./week2.1) - Async Functions Deep Dive
- JavaScript's synchronous default behavior
- Tasks requiring wait: file reading, network requests, timeouts
- Promises as syntactical sugar for async operations
- More readable async code patterns
- Understanding callback hell
- Practical async function implementations

#### [Week 2.2](./week2.2) - Node.js Runtime & HTTP Protocol
- ECMAScript and JavaScript relationship
- V8 engine: JavaScript compiler
- HTTP protocol: frontend-backend communication
- Browser request lifecycle: URL parsing, DNS lookup, connection establishment
- DNS resolution and IP mapping
- HTTP methods: GET, POST, PUT, DELETE
- HTTP status codes: 200, 404, 403, 500
- Express library for HTTP server creation

#### [Week 2.3 & 2.4](./week2.3&week2.4) - Bash & Terminal Commands
- Terminal as an interface for machine operations
- Essential commands: pwd, cd, ls, mkdir, touch
- File operations: cat, vi, mv, cp
- Node ecosystem: nvm (Node Version Manager), npm (Node Package Manager)
- Running JavaScript locally with node
- Git basics and version control
- clear command for terminal cleanup

#### [Week 2.5](./week2.5) - Express Basics & HTTP Examples
- Express.js fundamentals
- Creating HTTP servers with Express
- Route handling and request processing
- Practical HTTP endpoint examples
- Request and response objects

#### [Week 2.6](./week2.6) - Array Methods & Functional Programming
- Arrow functions vs regular functions
- Array.map(): transforming arrays
- Creating custom map function
- Array.filter(): filtering elements
- Functional programming patterns
- Callback functions in array methods
- Practical array manipulation exercises

#### [Week 3.1](./week3.1) - Middlewares & Input Validation
- Express middleware concept
- Request validation using headers and query params
- Middleware chaining with next()
- Request counting middleware
- express.json() for parsing JSON bodies
- Global error catching middleware
- Zod library for input validation
- Schema validation with zod.array() and zod.object()
- Email and password validation patterns
- Error handling with try-catch

#### [Week 3.2](./week3.2) - JWT Authentication
- Hashing, Encryption, and JSON Web Tokens
- JWT implementation with jsonwebtoken library
- User authentication flow
- Token generation with jwt.sign()
- Token verification with jwt.verify()
- In-memory user database
- Protected routes using JWT
- Decoding and verifying tokens
- Authentication middleware patterns

#### [Week 3.3](./week3.3) - Middleware Patterns
- Creating reusable middleware functions
- Age verification middleware example
- Route-specific middleware application
- Middleware for access control
- Query parameter validation in middleware
- Response handling in middleware

#### [Week 3.4](./week3.4) - JWT Deep Dive
- JWT token generation process
- JWT structure and components
- Secret key for signing tokens
- Token decoding (anyone can do)
- Token verification (only backend can verify)
- Try-catch error handling
- Secure authentication patterns

#### [Week 4.1](./week4.1) - DOM Manipulation
- Creating web applications without React
- Document Object Model (DOM)
- Browser-specific APIs: setTimeout, fetch, setInterval, document
- ECMAScript vs Browser APIs
- Making websites dynamic
- DOM manipulation for content updates
- Dynamic content rendering on scroll

#### [Week 4.2](./week4.2) - Dynamic TODO App & State Management
- Building production-ready TODO applications
- Server-side TODO storage
- Updating DOM based on server state
- addTodo, updateTodo, removeTodo functions
- State-driven rendering concept
- Backend state synchronization
- Virtual DOM introduction
- State as single source of truth

#### [Week 4.2.2](./week4.2.2) - Vite & Modern Build Tools
- Vite project setup
- Modern frontend build tooling
- Fast development server
- Hot module replacement (HMR)

#### [Week 4.3](./week4.3) - Database Fundamentals & MongoDB
- What is a database?
- CRUD operations: Create, Read, Update, Delete
- Schema definition
- MongoDB basics
- Mongoose for MongoDB
- Database design patterns
- Assignments with MongoDB and JWT authentication

---

### **Phase 3: Frontend Development (Weeks 5-7)**

#### [Week 5.1](./week5.1) - React Fundamentals
- JSX: JavaScript + XML syntax
- Static vs Dynamic websites
- React for DOM manipulation
- Three pillars of React: Components, State, Rendering
- State: object representing current app state
- Components: reusable, dynamic HTML snippets
- Re-rendering: DOM manipulation on state change
- Automatic DOM updates with state changes
- React app bootstrapping with create-react-app

#### [Week 5.2](./week5.2) - Full Stack TODO Application
**Project:** Complete TODO app with frontend and backend
- React frontend with state management
- Express backend with API routes
- Creating todos
- Viewing all todos
- Marking todos as done
- Frontend-backend integration
- RESTful API design

#### [Week 6.1](./week6.1) - React Re-rendering & Optimization
- React returns and re-rendering
- Key prop for list rendering
- Wrapper components pattern
- useEffect, useMemo, useCallback, useRef hooks
- Prop drilling problem
- Single top-level XML return requirement
- Reconciliation process
- Minimizing re-renders by pushing state down
- React.memo for skipping re-renders
- Building highly optimal React apps

#### [Week 6.2](./week6.2) - React Hooks: useState & useEffect
- useState: describing app state
- State updates trigger re-renders
- Re-renders result in DOM updates
- Syntax: `const [count, setCount] = useState([])`
- useEffect: performing side effects
- Side effects in function components
- Operations affecting other components
- Effects that can't be done during rendering

#### [Week 6.4](./week6.4) - Performance Hooks
- useMemo: memoizing expensive calculations
- useCallback: memoizing callback functions
- useRef: referencing DOM elements and persisting values
- Performance optimization techniques
- Preventing unnecessary re-renders
- When to use each hook

#### [Week 7.1](./week7.1) - React Router & Context API
- React Routing with react-router-dom
- useNavigate hook for programmatic navigation
- Lazy loading components
- Props drilling problem and solutions
- Context API for global state
- useContext hook
- Creating and consuming context
- Avoiding prop drilling with context

#### [Week 7.2](./week7.2) - Recoil State Management
- Context API limitations
- Introduction to Recoil for state management
- Atoms: storing state outside components
- Atoms can be teleported to any component
- RecoilRoot wrapper component
- useRecoilState: reading and writing atom state
- useRecoilValue: reading atom state only
- useSetRecoilState: writing atom state only
- Selectors for derived state
- useMemo and useCallback for performance
- Optimization best practices

#### [Week 7.4](./week7.4) - Advanced Recoil & Performance
- Deep dive into Recoil atoms
- Advanced selector patterns
- Asynchronous data queries with Recoil
- useRecoilState for state management
- useRecoilValue for reading state
- useSetRecoilState for updating state
- Code splitting strategies
- Lazy loading components
- React performance optimization techniques

---

### **Phase 4: Full Stack Integration (Weeks 8-9)**

#### [Week 8.1](./week8.1) - CSS & Responsive Design
- Flexbox layout system
- Responsive design principles
- CSS colors and backgrounds
- Grid layout system
- Connecting frontend and backend
- API integration patterns
- CORS (Cross-Origin Resource Sharing) handling

#### [Week 8.2](./week8.2) -  Paytm Clone (Basic)
**Project:** Basic payment application with CRUD operations
- User authentication
- Transaction management
- Database integration
- RESTful API implementation

#### [Week 8.3](./week8.3) - HTTP Clients & Deployment
- fetch API for HTTP requests
- Axios library for HTTP requests
- Comparison: fetch vs axios
- Hosting platforms overview
- Environment variables configuration
- Production build optimization

#### [Week 9.1](./week9.1) - React Hooks Revision
- Comprehensive React hooks review
- useState, useEffect, useContext patterns
- Custom hooks creation
- Hooks best practices
- Common hooks pitfalls and solutions
- Caching strategies
- Rate limiting concepts
- API optimization techniques

#### [Week 9.2](./week9.2) - TypeScript Basics
- Introduction to TypeScript
- Type annotations and type inference
- Basic types: string, number, boolean
- Interfaces and type aliases
- Function typing
- TypeScript configuration
- WebSockets introduction
- Socket.io for real-time communication
- Event-driven architecture patterns

#### [Week 9.3](./week9.3) - TypeScript Fundamentals
- TypeScript basics continuation
- Type safety benefits
- Compiling TypeScript to JavaScript
- TypeScript with Node.js
- TypeScript with React
- Unit testing introduction
- Integration testing concepts
- Test-driven development (TDD) basics

---

### **Phase 5: Modern Stack & TypeScript (Weeks 10-13)**

#### [Week 10.1.1.1](./week10.1.1.1) - SQL Databases & PostgreSQL
- Types of databases: NoSQL (Mongoose) vs SQL (MySQL, PostgreSQL)
- NoSQL: schemaless, flexible updates
- SQL: defined schema, migrations required
- PostgreSQL introduction
- psql: terminal-based PostgreSQL interface
- pg library: Node.js to PostgreSQL connection
- Creating databases and defining schemas
- Connection strings: `postgresql://username:password@host/database`
- Introduction to ORMs
- Why ORMs are preferred over raw SQL

#### [Week 10.2](./week10.2) -  Prisma ORM
**Key Topics:**
- Prisma setup and configuration
- Schema design and migrations
- Type-safe database queries
- Auto-completion and type safety
- Database client generation

#### [Week 11.1](./week11.1) -  Serverless Architecture
**Key Topics:**
- Serverless backends
- Cloudflare Workers
- Auto-scaling applications
- Per-request billing model
- Deployment strategies

#### [Week 11.2](./week11.2) - Cloud Platforms
- AWS/GCP/Azure basics
- Serverless functions
- Cloud deployment

#### [Week 12.2](./week12.2) -  TypeScript Fundamentals
**Key Topics:**
- TypeScript configuration
- Type system basics
- Utility types (Pick, Partial, Readonly, Record)
- Type safety benefits
- Migration strategies

#### [Week 12.3.1](./week12.3.1) - Advanced TypeScript
- Generics and constraints
- Advanced types
- Type inference

#### [Week 12.3.2](./week12.3.2) - TypeScript Patterns
- Design patterns in TS
- Decorators
- Advanced configurations

#### [Week 12.4](./week12.4) - TypeScript with React
- Typed components
- Props typing
- Event handling

#### [Week 12.5](./week12.5) - TypeScript Best Practices
- Code organization
- Type definitions
- Common patterns

#### [Week 13](./week13) - TypeScript Mastery
- Advanced type manipulation
- Conditional types
- Mapped types

---

### **Phase 6: Next.js & Modern Frameworks (Weeks 14-15)**

#### [Week 14.1](./week14.1) -  Next.js Introduction
**Key Topics:**
- Server-side rendering (SSR)
- SEO optimization
- File-based routing
- API routes in Next.js
- Client vs Server components
- Solving React's limitations

#### [Week 14.2](./week14.2) - Advanced Next.js
- Data fetching strategies
- Static site generation
- Incremental static regeneration
- Image optimization

#### [Week 14.3](./week14.3) - Next.js Patterns
- Layout patterns
- Middleware
- Authentication in Next.js

#### [Week 15.1](./week15.1) - Next.js Performance
- Bundle optimization
- Code splitting
- Performance monitoring

#### [Week 15.2](./week15.2) - Next.js Deployment
- Vercel deployment
- Environment configuration
- Production optimization

---

### **Phase 7: Monorepos & Production Apps (Weeks 16-19)**

#### [Week 16](./week16) -  Monorepos & Turborepo
**Key Topics:**
- Monorepo architecture
- Turborepo setup and configuration
- Shared code management
- Build system orchestration
- Caching and parallelization
- Dependency graph management
- Workspace organization

#### [Week 16.2](./week16.2) - Monorepo Patterns
- Package management
- Shared configurations
- Cross-package dependencies

#### [Week 16.3](./week16.3) - Turborepo Advanced
- Custom pipelines
- Remote caching
- CI/CD integration

#### [Week 17](./week17) -  Advanced Paytm Clone (Production-Grade)
**Major Project:** Full-featured payment application with enterprise patterns

**Tech Stack:**
- Next.js (Frontend & Backend)
- Turborepo (Monorepo management)
- Prisma ORM
- PostgreSQL
- NextAuth.js
- Recoil (State management)
- TailwindCSS

**Features Implemented:**
-  User & Merchant authentication (Credentials + OAuth)
-  On-ramp transactions (Bank integration)
-  P2P transfers with transaction locking
-  Balance management
-  Webhook handlers for bank callbacks
-  Server actions and API routes
-  Type-safe database operations
-  CI/CD pipeline with GitHub Actions
-  Monorepo architecture with shared packages

**Architecture:**
```
apps/
  ├── user-app/          # User-facing application
  ├── merchant-app/      # Merchant dashboard
  └── bank_webhook/      # Webhook handler service
packages/
  ├── db/                # Shared Prisma client
  ├── ui/                # Shared UI components
  ├── store/             # Shared state (Recoil)
  └── typescript-config/ # Shared TS configs
```

#### [Week 19](./week19) - Advanced Topics
- Microservices architecture
- Advanced deployment strategies
- Scaling applications

---

##  Technologies & Tools

### **Frontend**
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=recoil&logoColor=white)

### **Backend**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)

### **DevOps & Tools**
![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=flat&logo=turborepo&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

##  Key Projects

### 1. **Basic Paytm Clone** (Week 8.2)
- CRUD operations
- User authentication
- Transaction management

### 2. **Advanced Paytm Clone** (Week 17)
- Production-grade architecture
- Monorepo structure
- Multiple authentication strategies
- Real-time transaction processing
- CI/CD pipeline

---

##  Learning Outcomes

By the end of this journey, I have gained expertise in:

 **Frontend Development**
- Modern React patterns and hooks
- Next.js server-side rendering
- State management (Context, Recoil)
- Responsive UI with TailwindCSS

 **Backend Development**
- RESTful API design
- Database design and optimization
- Authentication & authorization
- Serverless architectures

 **Full Stack Integration**
- Monorepo management
- Type-safe development with TypeScript
- ORM usage (Prisma)
- Real-time features

 **DevOps & Deployment**
- CI/CD pipelines
- Cloud deployment
- Performance optimization
- Production best practices

---

##  Getting Started

Each week's folder contains:
-  **README.md** - Detailed notes and concepts
-  **Code Examples** - Practical implementations
-  **Projects** - Hands-on applications

To explore a specific week:
```bash
cd week<number>/
# Read the README.md for detailed information
```

---

##  Notes

> **Note:** There is a folder sequence alignment after Week 9. The folders continue from Week 1.5 to Week 10.1 due to the learning path structure. This is intentional and follows the curriculum progression.

---

##  Contributing

This is a personal learning repository, but feedback and suggestions are always welcome!

---

##  Connect

Feel free to reach out if you have questions or want to discuss any of the topics covered!

---

##  License

This repository is for educational purposes. Feel free to use the code and notes for your own learning journey.

---


**Star this repository if you find it helpful!**

*Last Updated: October 2025*

 