FROM node:16
ENV NODE_ENV production
WORKDIR /srv/app
EXPOSE 1337
COPY package.json package-lock.json ./
COPY providers/strapi-provider-upload-aws-s3/package.json providers/strapi-provider-upload-aws-s3/
RUN npm install pm2 -g && npm install
COPY . .
RUN npm run build
CMD pm2-runtime server.js