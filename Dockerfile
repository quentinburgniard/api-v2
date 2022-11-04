FROM node:16
ENV NODE_ENV production
WORKDIR /srv/app
EXPOSE 1337
RUN npm install pm2 -g
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build && rm -r src
CMD pm2-runtime server.js