FROM node:latest

WORKDIR /genesis

COPY package*.json /genesis

RUN npm install

COPY . .