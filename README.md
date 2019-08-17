# Englaxy

* Englaxy (coded by Tung Minh Vu for his bachelor final project) 

# Screenshots:

![Alt text](screenshots/image021.jpg?raw=true "Title")


## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).


---

## Client
Go to the client folder in order to run the front-end.
### Install

    $ cd client
    $ npm install

### Start & watch

    $ npm start

### Simple build for production

    $ npm run build

### Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

**Note:** Unix user can just link the `git-hooks/post-merge`:

---
## Database
This repository contains a mongoDB database. You need to install mongoDB in your computer first to run the database.
### Install

    $ cd server
    $ npm install mongodb
    
### Start

    $ sudo service mongod start
    $ o	sudo mongo --host 127.0.0.1:27017

---
## Server
This repository contains a server to use with your task. You need to run the database first in order to start the backend
### Install

    $ cd server
    $ npm install
    
   Your server will start at localhost:3000. You can change the port in ./src/constants.js
### Start

    $ nodemon app.js 

---
## Languages & tools

### JavaScript

- [Redux](https://redux.js.org/)
- [React](http://facebook.github.io/react)

### CSS

- [SASS](https://sass-lang.com/)

### Cloud-based service
- [Cloudinary]

