FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./src .
COPY ./files ./files
EXPOSE 80
