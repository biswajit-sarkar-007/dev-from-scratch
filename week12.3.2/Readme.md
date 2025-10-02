#docker

### What are we using docker for?

- Docker let’s you do a lot of things.
- It let’s you containerise your applications.
- It let’s you run other people’s code + packages in your machine.
- It let’s you run common software packages inside a container (For eg - Mongo, Postgres etc)

### Where can we get packages from?

Just like you can push your code to Github/Gitlab.
You can push images to docker registries

### Common commands to know:

> 1.docker run
> 2.docker ps
> 3.docker kill

#### Running an image

1. Running a simple image:
   **docker run mongo**

2.Adding a port mapping:
The reason is that you haven’t added a port mapping
**docker run -p 27017:27017 mongo**

3.Starting in detached mode:
Adding -d will ensure it starts in the background
**docker run -d -p 27017:27017 mongo**

4.Inspecting a container:
This will show you all the containers you are running.
**docker ps**

5.Stopping a container:
Will stop the container that you are running
**docker kill <container_id>**

### Common packages

1.Mongo

> docker run -d -p 27017:27017 mongo

2.Postgres

> docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

The connection string for this postgres would be:

> postgresql://postgres:mysecretpassword@localhost:5432/postgres
