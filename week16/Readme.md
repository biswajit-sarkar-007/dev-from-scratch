
### What are monorepos

As the name suggests, a single repository (on github lets say) that holds all your frontend, backend, devops code.

#### Do you need to know them very well as a full stack engineer

Not exactly. Most of the times they are setup in the project already by the dev tools guy and you just need to follow the right practises
Good to know how to set one up from scratch though

### Why Monorepos?

#### Why not Simple folders?

Why cant I just store services (backend, frontend etc) in various top level folders?

You can, and you should if your

 1.Services are highly decoupled (dont share any code)

 2.Services don’t depend on each other.

For eg - A codebase which has a Golang service and a JS service

#### Why monorepos?

 - Shared Code Reuse

 - Enhanced Collaboration

 - Optimized Builds and CI/CD: Tools like TurboRepo offer smart caching and task execution strategies that can significantly reduce build and testing times.

 - Centralized Tooling and Configuration: Managing build tools, linters, formatters, and other configurations is simpler in a monorepo because you can have a single set of tools for the entire project. 

#### Common monorepo frmaework in Node.js

1.Lerna - https://lerna.js.org/
2.nx - https://github.com/nrwl/nx
3.Turborepo - https://turbo.build/ — Not exactly a monorepo framework
4.Yarn/npm workspaces - https://classic.yarnpkg.com/lang/en/docs/workspaces/
 
We’ll be going through turborepo since it’s the most relevant one today and provides more things (like build optimisations) that others don’t


### Build System vs Build system orchestrator vs Monorepo framework

#### Build System

A build system automates the process of transforming source code written by developers into binary code that can be executed by a computer. For JavaScript and TypeScript projects, this process can include transpilation (converting TS to JS), bundling (combining multiple files into fewer files), minification (reducing file size), and more. A build system might also handle running tests, linting, and deploying applications.

#### Build System Orchestrator

TurboRepo acts more like a build system orchestrator rather than a direct build system itself. It doesn't directly perform tasks like transpilation, bundling, minification, or running tests. Instead, TurboRepo allows you to define tasks in your monorepo that call other tools (which are the actual build systems) to perform these actions. 
These tools can include anything from tsc, vite etc


#### Monorepo Framework

A monorepo framework provides tools and conventions for managing projects that contain multiple packages or applications within a single repository (monorepo). This includes dependency management between packages, workspace configuration.
 

### Turborepo as a build system orchestrator 


Turborepo is a *build system orchestrator* . 
The key feature of TurboRepo is its ability to manage and optimize the execution of these tasks across your monorepo. It does this through:

*1.Caching:* TurboRepo caches the outputs of tasks, so if you run a task and then run it again without changing any of the inputs (source files, dependencies, configuration), TurboRepo can skip the actual execution and provide the output from the cache. This can significantly speed up build times, especially in continuous integration environments.

*2.Parallelization:* It can run independent tasks in parallel, making efficient use of your machine's resources. This reduces the overall time needed to complete all tasks in your project.

*3.Dependency Graph Awareness:* TurboRepo understands the dependency graph of your monorepo. This means it knows which packages depend on each other and can ensure tasks are run in the correct order.


### let's initialize a simple Turborepo

 


 

 
