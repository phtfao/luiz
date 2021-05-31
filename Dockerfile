# Build Angular APP
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY ./frontend/*.json ./
RUN npm install
COPY ./frontend/ .
RUN npm run build

# Run Angular APP
FROM nginx:1.17.1-alpine
COPY ./frontend/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/capes-frontend /usr/share/nginx/html