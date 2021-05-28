FROM node:latest

RUN mkdir -p /farming-simulator

WORKDIR /farming-simulator

COPY package.json /farming-simulator/

RUN npm install

COPY . /farming-simulator

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]