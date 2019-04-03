FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN cd server/src
RUN npm run db:install
RUN npm run db:seed
RUN cd ../../

EXPOSE 3000

CMD [ "npm", "start" ]
