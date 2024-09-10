FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000 3001 3003 3004
CMD ["npm", "run", "start"]
