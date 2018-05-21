Explorer
========

Viewer for media uncovered files

Building
--------
`docker build -t media-uncovered/explorer-angular:dev .`

Development
-----------

After you've built your image use
`docker run -v <PATH_TO_PROJECT_FILES>/angular:/var/www/angular -p 4200:4200 -t media-uncovered/explorer-angular:dev`
to start a development server on port 4200. Any changes made under ./angular
will be reflected in the running application.
