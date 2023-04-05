FROM node:14.17.3-alpine3.14

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g nodemon

RUN npm install

COPY ./ ./

CMD [""]