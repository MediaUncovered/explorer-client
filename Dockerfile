FROM node:slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx-light

RUN npm install -g tsd@^0.6.0 typescript@^1.5.0
RUN npm install -g @angular/cli

COPY ./angular /var/www/angular

WORKDIR /var/www/angular
RUN npm install

EXPOSE 4200
CMD ng serve --host 0.0.0.0
