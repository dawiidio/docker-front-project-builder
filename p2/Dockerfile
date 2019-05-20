FROM node:11
WORKDIR /code
COPY package.json ./
RUN npm install --unsafe-perm
COPY . .
VOLUME [ "/code/lib" ]
CMD [ "npm", "run", "build" ]