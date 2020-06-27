explorer-client
========

Viewer for media uncovered files







## Getting started



### Run angular locally

`cd angular`

`ng serve`



### Docker image for explorer-client

`docker build -t mediauncovered/explorer-client:dev .`
`docker run mediauncovered/explorer-client:dev`



### Run server and client with docker-compose

The explorer-server docker image is required for this. Checkout the explorer-server repo to find out how to build it.


Build and run the app with docker-compose:

`docker-compose build`
`docker-compose up`



The client is started on localhost:4200 while the server runs on localhost:5000.
As a development setup. any changes made under ./angular/src will be reflected in the running application.