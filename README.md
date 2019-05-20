# docker-front-project-builder
Test repo for sharing transpiled data between containers and serve it from one main

Notes:
* interesting thing, service (or just volume) can not be named as `p1`, if it is then files are not copied between containers
* `copy` directive do merge of files and directories, mount replaces all files under directory
