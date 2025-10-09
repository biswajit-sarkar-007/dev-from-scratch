# why docker

Docker/containers are important for a few reasons - 

 - 1.Kubernetes/Container orchestration

 - 2.Running processes in isolated environments

 - 3.Starting projects/auxilary services locally
 
### Containerization

What are containers?

Containers are a way to package and distribute software applications in a way that makes them easy to deploy and run consistently across different environments. They allow you to package an application, along with all its dependencies and libraries, into a single unit that can be run on any machine with a container runtime, such as Docker.

Why containers?

 - 1.Everyone has different Operating systems

 - 2.Steps to run a project can vary based on OS

 - 3.Extremely harder to keep track of dependencies as project grows

### Benefits of using containers

 - 1.Let you describe your configuration in a single file

 - 2.Can run in isolated environments

 - 3.Makes Local setup of OS projects a breeze

 - 4.Makes installing auxiliary services/DBs easy

### References
 - For Reference, the following command starts mongo in all operating systems - 

 > docker run -d -p 27017:27017 mongo

 - Docker isn’t the only way to create containers


### Inside docker

As an application/full stack developer, you need to be comfortable with the following terminologies -

 - 1.Docker Engine

 - 2.Docker CLI - Command line interface

 - 3.Docker registry

#### 1.Docker Engine

Docker Engine is an open-source *containerization* technology that allows developers to package applications into *container*

Containers are standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

#### 2.Docker CLI

The command line interface lets you talk to the docker engine and lets you start/stop/list containers

 > docker run -d -p 27017:27017 mongo

#### 3.Docker registry

The *docker registry* is how Docker makes money. 
It is similar to *github*, but it lets you push *images* rather than sourcecode.

Docker’s main registry - https://dockerhub.com/

Mongo image on docker registry - https://hub.docker.com/_/mongo


### Images vd containers

#### Docker Image

A Docker image is a lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files.

 > A good mental model for an image is *Your codebase on github*


#### Docker Container
 
A container is a running instance of an image. It encapsulates the application or service and its dependencies, running in an isolated environment.


 > A good mental model for a container is when you run *node index.js* on your machine from some source code you got from github


### Port mapping

 > docker run -d -p 27017:27017 mongo

### Common docker commands

 - docker images

 - docker ps

 - docker run

 - docker build


#### 1. docker images

Shows you all the images that you have on your machine

#### 2. docker ps

Shows you all the containers you are running on your machine

#### 3. docker run

Lets you start a container

  -p ⇒ let’s you create a port mapping
  -d ⇒ Let’s you run it in detatched mode

#### 4. docker build

Lets you build an image. We will see this after we understand how to create your own Dockerfile

#### 5. docker push

Lets you push your image to a registry

#### 6. Extra commands

 - docker kill
 - docker exec
 

### Dockerfile

#### What is a Dockerfile

If you want to create an image from your own code, that you can push to dockerhub, you need to create a Dockerfile for your application.

A Dockerfile is a text document that contains all the commands a user could call on the command line to create an image.

#### How to write a dockerfile

A dockerfile has 2 parts

 - 1.Base image

 - 2.Bunch of commands that you run on the base image (to install dependencies like Node.js).


Lest's write our own Dockerfile

```
FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]

```

### Common commands

 - *WORKDIR*: Sets the working directory for any *RUN*, *CMD*, *ENTRYPOINT*, *COPY* instructions that follow it.

 - *RUN*: Executes any commands in a new layer on top of the current image and commits the results.

 - *CMD*: Provides defaults for executing a container. There can only be one CMD instruction in a Dockerfile.

 - *EXPOSE*: Informs Docker that the container listens on the specified network ports at runtime.

 - *ENV*: Sets the environment variable.

 - *COPY*: Allow files from the Docker host to be added to the Docker image.

### Building images

Now that you have a dockerfile in your project, try building a docker image from it

 > docker build -t image_name .

 
Now if you try to look at your images, you should notice a new image created

 > docker images

 [] Add a .dockerignore so that node_modules don’t get copied over 


### Running images

 > docker run -p 3000:3000 image_name

Try visiting *localhost:3000*


### Passing in env variables

 > docker run -p 3000:3000 -e DATABASE_URL="postgres://avnadmin:<database url things>/defaultdb?sslmode=require" image_name


The *-e* argument let’s you send in environment variables to your node.js app





