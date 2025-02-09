FROM node

WORKDIR /app

COPY . .

ENV API_HOST=server

ENV PI_PORT=8000

ENV API_PROTOCOL=http

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]