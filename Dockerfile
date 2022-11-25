FROM node:16
ENV NODE_ENV production
WORKDIR /srv/app
EXPOSE 1337
COPY package.json package-lock.json ./
RUN npm install pm2 -g && npm install
COPY . .
RUN npm run build
CMD pm2-runtime server.js