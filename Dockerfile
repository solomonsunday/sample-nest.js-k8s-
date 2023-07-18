# Redis setup
FROM node:16.19-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install glob rimraf

RUN npm install

COPY . .
# Expose port 3000 for the application to listen on
EXPOSE 5000

# Start the application
CMD [ "npm", "run", "start:dev" ]