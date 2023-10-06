# Stitch Fix Clone
I am a full-stack developer and have always held a love for fashion and style. I was introduced to Stitch Fix many years ago as a client and have been hooked on their personal styling service ever since. Stitch Fix is a dream company for me, therefore I was inspired to build a React UI clone to explore nuances of their UI.

## Installation
Option 1: Docker

This project is containerized with Docker. If you do not have docker installed, check out the documentation [here](https://www.docker.com/get-started/).

Once you've installed Docker, fork and clone this GitHub repo into a desired directory on your machine.

Cd into the directory and run:

```
docker-compose up
```

This command downloads and builds the required Docker image, installs all dependencies, and starts a container with the React application, which is available on local host port 4000.

To stop running and remove the container, run:

```
docker-compose down
```

Option 2: Local installation

Fork and clone this GitHub repo into a desired directory. Cd into the directory, cd into the subdirectory app, then run:

```
npm install
```

This command will create package.json and package-lock.json files with all of your dependencies. Then run:

```
npm start
```

The project will be available on local host 4000.

## Credits
This application is a clone of Stitch Fix. All images, logos, and text are property of Stitch Fix and are used only for personal project purposes. 

Check out and support Stitch Fix [here](https://www.stitchfix.com/).