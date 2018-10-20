FROM node:10

WORKDIR /app

COPY . /app

RUN npm install -g nodemon
RUN npm install

EXPOSE 80

CMD ["npm", "run", "prod"]
