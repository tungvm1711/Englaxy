/** server/controllers/article.ctrl.js*/
const Article = require('./../models/Article');
const User = require('./../models/User');
const fs = require('fs');
const cloudinary = require('cloudinary');
const {wrap: async} = require('co');
const router = require('express').Router();

exports.addArticle = async(function * (req, res,next){
  let {text, title, claps, description} = req.body;
  if (req.files.image) {
    cloudinary.uploader.upload(req.files.image.path, (result) => {
      let obj = {text, title, claps, description, feature_img: result.url != null ? result.url : ''};
      saveArticle(obj)
    }, {
      resource_type: 'image',
      eager: [
        {effect: 'sepia'}
      ]
    })
  } else {
    saveArticle({text, title, claps, description, feature_img: ''})
  }
  function saveArticle(obj) {
    new Article(obj).save((err, article) => {
      if (err)
        res.send(err);
      else if (!article)
        res.send(400);
      else {
        return article.addAuthor(req.body.author_id).then((_article) => {
          return res.send(_article)
        })
      }
      next()
    })
  }
});

exports.getAll = async(function * (req, res, next){
  Article.find(req.params.id)
    .populate('author')
    .populate('comments.author').exec((err, article) => {
    if (err)
      res.send(err);
    else if (!article)
      res.send(404);
    else
      res.send(article);
    next()
  })
});


exports.clapArticle = async(function * (req, res, next) {
  Article.findById(req.body.article_id).then((article) => {
    return article.clap().then(() => {
      return res.json({msg: "Done"})
    })
  }).catch(next)
});

exports.commentArticle = async(function * (req, res, next) {
  Article.findById(req.body.article_id).then((article) => {
    return article.comment({
      author: req.body.author_id,
      text: req.body.comment
    }).then(() => {
      return res.json({msg: "Done"})
    })
  }).catch(next)
});

exports.getArticle = async(function * (req, res, next) {
  Article.findById(req.params.id)
    .populate('author')
    .populate('comments.author').exec((err, article) => {
    if (err)
      res.send(err);
    else if (!article)
      res.send(404);
    else
      res.send(article);
    next()
  })
});

