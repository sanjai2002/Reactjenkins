FROM node:18 
WORKDIR /app/reactapp
COPY package.json /app/reactapp
RUN npm install
COPY . /app/reactapp
CMD [ "npm" , "start" ]
