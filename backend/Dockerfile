FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --save-dev jest

COPY . .

EXPOSE 4000
CMD ["npm", "start"]