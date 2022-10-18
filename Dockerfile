# Install the base requirements for the app.
# This stage is to support development.
FROM node:current-alpine
WORKDIR /app

# copy package.json to /app
COPY package.json .
RUN npm install

# copy source coding to /app
COPY . .

EXPOSE 3000

# Provide defaults for an executing container.
CMD [ "npm","start"]