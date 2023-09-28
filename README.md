# Stitch Fix Clone
I am a full-stack developer and have always held a love for fashion and style. I was introduced to Stitch Fix many years ago as a client and have been hooked on their personal styling service ever since. Stitch Fix is a dream company for me, therefore I was inspired to build a clone application using Rails and React to explore nuances of their UI as well as stretch my development skills to integrate product data from multiple APIs into a comprehensive product database.

## Installation
This project is containerized with Docker. If you do not have docker installed, check out the documentation [here](https://www.docker.com/get-started/).

Once you've installed Docker, fork and clone this GitHub repo into a desired directory on your machine.

Cd into the directory and run:

```
docker-compose up
```

This command starts and runs all three project containers, including a backend Rails app, a Postgres instance, anad a frontend React app.

Ports:

Rails app: 3000 | React app: 4000

To stop running and remove the containers, run:

```
docker-compose down
```

## Credits
This application is a clone of Stitch Fix. All images, logos, and text are property of Stitch Fix and are used only for project purposes. 

Check out and support Stitch Fix [here](https://www.stitchfix.com/).