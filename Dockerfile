FROM node:slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx-light

RUN npm install -g tsd@^0.6.0 typescript@^1.5.0
RUN npm install -g @angular/cli
# RUN npm install -g ng2-charts
# RUN npm install -g chart.js

COPY ./nginx /etc/nginx
COPY ./angular /var/www/angular

WORKDIR /var/www/angular
RUN npm install

EXPOSE 4200
CMD ng serve --host 0.0.0.0
#
# COPY entrypoint.sh /entrypoint.sh
# ENTRYPOINT ["/entrypoint.sh"]
# CMD ["nginx", "-g", "daemon off;"]
