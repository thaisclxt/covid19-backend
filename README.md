# Coronavirus vaccination backend

Description: _Application to schedule coronavirus vaccine, proposed by Pitang Agile IT's Trainee Project_

Project: [COVID19](https://github.com/users/thaisclxt/projects/2)

- Project linked to this repository based on Kanbam cards with issues for each branch and linked pull requests
- You can see the timeline of the most recent commits to this repository and its network ordered by most recently pushed to, on [Network Graph](https://github.com/thaisclxt/covid19-backend/network)

## Database

> I'm usign [MongoDB](https://www.mongodb.com/) database on [Docker](https://www.docker.com/). If you already have it on your pc, perfect, you can jump to "Recommended Installation"

### Commands to create a local MongoDB server with Docker

1. `sudo docker volume create <volume_name>` to create a volume
2. `sudo docker run -v <volume_name>:/data/db --name=<nome_do_container> -p 27017:27017 -d mongo:5.0.6` to create a container from MongoDB official image
3. `sudo docker exec -it <container_name> bash` to start a interactive session to be able to access MongoDB from the terminal

### Mongoose

> I choosed [Mongoose](https://mongoosejs.com/) as a ORM (Object-Relational Mapper) for MongoDB. When `mongoose.connect(DATABASE_URL)` is invoked, the database is created if it doesn't exist

## Recommended Instalation

1. Make sure you have [Node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) installed
2. Choose a directory on your pc to clone this repository
3. Run `git clone git@github.com:thaisclxt/covid19-backend.git` on the choosed directory
4. Run `yarn start` to start the app
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser or use [Insomnia](https://insomnia.rest/) to have a better experience with HTTP requests, for example:

![GET all - example](./screenshot/getAll.png)
