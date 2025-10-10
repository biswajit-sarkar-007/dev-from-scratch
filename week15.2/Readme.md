### Layer in Docker

In Docker, layers are a fundamental part of the image architecture that allows Docker to be efficient, fast, and portable. A Docker image is essentially built up from a series of layers, each representing a set of differences from the previous layer.

#### How layers are made - 

 - 1.Base Layer: The starting point of an image, typically an operating system (OS) like Ubuntu, Alpine, or any other base image specified in a Dockerfile.

 - 2.Instruction Layers: Each command in a Dockerfile creates a new layer in the image. These include instructions like *RUN*, *COPY*, which modify the filesystem by installing packages, copying files from the host to the container, or making other changes. Each of these modifications creates a new layer on top of the base layer.

 - 3.Reusable & Shareable: Layers are cached and reusable across different images, which makes building and sharing images more efficient. If multiple images are built from the same base image or share common instructions, they can reuse the same layers, reducing storage space and speeding up image downloads and builds.

 - 4.Immutable: Once a layer is created, it cannot be changed. If a change is made, Docker creates a new layer that captures the difference. This immutability is key to Docker's reliability and performance, as unchanged layers can be shared across images and containers.
 
 
 
### Why layers?

If you change your Dockerfile, layers can get re-used based on where the change was made.

 
[] If a layer changes, all subsequent layers also change


#### Optimising Dockerfile

Old One:

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

New One:

```
FROM node:20

WORKDIR /usr/src/app

COPY package* .
COPY ./prisma .
    
RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["node", "dist/index.js", ]

```

1.We first copy over only the things that *npm install* and *npx prisma generate* need

2.Then we run these scripts

3.Then we copy over the rest of the source code


### Networks and Volumes

Networks and volumes are concepts that become important when you have multiple containers running in which you

 - 1.Need to persist data across docker restarts

 - 2.Need to allow containers to talk to each other


[] We didn’t need *networks* until now because when we started the *mongo* container, it was being accessed by a Node.js process running directly on the machine


### Volumes

If you restart a *mongo* docker container, you will notice that your data goes away. 

This is because docker containers are transitory (they don’t retain data across restarts)

#### Without volumes
 - 1.Start a mongo container locally

 > docker run -p 27017:27017 -d mongo

 - 2.Open it in MongoDB Compass and add some data to it
 
 - 3.Kill the container

 > docker kill <container_id>

 - 4.Restart the container

 > docker run -p 27017:27017 -d mongo

 - 5.Try to explore the database in Compass and check if the data has persisted (it wouldn’t)


#### With volumes

 - 1.Create a volume

 > docker volume create volume_database

 - 2.Mount the folder in *mongo* which actually stores the data to this volume

 > docker run -v volume_database:/data/db -p 27017:27017 mongo

 - 3.Open it in MongoDB Compass and add some data to it

 - 4.Kill the container

 > docker kill <container_id>

 - 5.Restart the container

 > docker run -v volume_database:/data/db -p 27017:27017 mongo

 - 6.Try to explore the database in Compass and check if the data has persisted (it will!)


### Network

In Docker, a network is a powerful feature that allows containers to communicate with each other and with the outside world.
Docker containers can’t talk to each other by default.
*localhost* on a docker container means *it's own network* and not the network of the *host machine*

#### How to make containers talk to each other?
Attach them to the same network
 
inside your project at first ,

 - Build the image

 > docker build -t image_tag .

 - Create a network

 > docker network create my_custom_network

 - Start the *backend process* with the *network* attached to it
 > docker run -d -p 3000:3000 --name backend --network my_custom_network image_tag

 - Start mongo on the same network

 > docker run -d -v volume_database:/data/db --name mongo --network my_custom_network -p 27017:27017 mongo

 > Check the logs to ensure the db connection is successful

 > docker logs <container_id>

1. Try to visit an endpoint and ensure you are able to talk to the database

2.If you want, you can remove the port mapping for mongo since you don’t necessarily need it exposed on your machine
 
#### Types of networks

 - Bridge: The default network driver for containers. When you run a container without specifying a network, it's attached to a bridge network. It provides a private internal network on the host machine, and containers on the same bridge network can communicate with each other.

 - Host: Removes network isolation between the container and the Docker host, and uses the host's networking directly. This is useful for services that need to handle lots of traffic or need to expose many ports.
 
 







