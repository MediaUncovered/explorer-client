FROM node:slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx-light

RUN npm install -g tsd@^0.6.0 typescript@^1.5.0
RUN npm install -g @angular/cli

COPY ./nginx /etc/nginx
COPY ./angular /var/www/angular

EXPOSE 4200
WORKDIR /var/www/angular
CMD ng serve --host 0.0.0.0
#
# COPY entrypoint.sh /entrypoint.sh
# ENTRYPOINT ["/entrypoint.sh"]
# CMD ["nginx", "-g", "daemon off;"]
