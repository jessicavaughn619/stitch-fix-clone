FROM node:16

WORKDIR /app
COPY package.json .

# install app dependencies
COPY package.json ./app/package.json
COPY package-lock.json ./app/package-lock.json
RUN npm install

# add app
COPY . ./
ENV NODE_ENV development
EXPOSE 4000

# start app
CMD ["npm", "run", "start", "0.0.0.0"] 