const routes = require('./routes/');
const helmet = require('helmet');
const cloudinary = require('cloudinary');


/** configure cloudinary */
cloudinary.config({
  cloud_name: 'dp25syq2s',
  api_key: '769591971987469',
  api_secret: 'OkDX_WmSbu82AqsQ7LbYUzzcEsw'
});


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');

mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === 'production';
const router = express.Router();

const app = express();

app.use(cors());
app.use(helmet());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
  app.use(errorHandler());
}

mongoose.connect('mongodb://localhost/lightblog');
mongoose.set('debug', true);

// Add models
require('./models/Article');
require('./models/User');
require('./models/Words');
require('./models/CollectionCounter');
require('./models/Vocabulary');

// Add routes
app.use(require('./routes'));
app.use('/vocabularies',require('./routes/api/vocabularies'));
app.use('/users', require('./routes/api/users'));
app.use('/articles', require('./routes/api/articles'));
app.use('/words',require('./routes/api/words'));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

app.listen(8000, () => console.log('Server started on http://localhost:8000'));
