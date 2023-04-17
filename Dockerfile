FROM node:14-alpine as builder
WORKDIR /bear-care
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.23.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /bear-care/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
