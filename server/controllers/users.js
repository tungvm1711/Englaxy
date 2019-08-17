const mongoose = require('mongoose');
const {wrap: async} = require('co');
const router = require('express').Router();
const User = require('./../models/User');
const Article = require('./../models/Article');


exports.getAllUsers = async(function* (req, res, next) {
  return User.find()
    .sort({ createdAt: 'descending' })
    .then((users) => res.json({ users: users.map(user => user.toJSON()) }))
    .catch(next);
});

exports.getUserJson = async(function* (req, res, next) {
  User.findById(req.params.id).then((err, user) => {
    if (err)
      res.send(err);
    else if (!user)
      res.send(404);
    else
      res.json({
        user: req.user.toJSON(),
      });
    next()
  });
});

exports.editUser = async(function* (req, res, next) {
  const { body } = req;

  if(typeof body.title !== 'undefined') {
    req.user.title = body.title;
  }

  if(typeof body.author !== 'undefined') {
    req.user.author = body.author;
  }

  if(typeof body.body !== 'undefined') {
    req.user.body = body.body;
  }
  User.findById(req.params.id).then((err, user) => {
    if (err)
      res.send(err);
    else if (!user)
      res.send(404);
    else
      req.user.save()
        .then(() => res.json({ user: req.user.toJSON() }))
        .catch(next);
    next()
  });
});

exports.deleteUser = async(function* (req, res, next) {
  return User.findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(next);
});


exports.createUser = async(function* (req, res) {
  const user = req.body;
  User.create(user).then(function (response) {
    res.send({
      result: 1,
      message: "Create user success",
      data: {
        id: response.id,
        name: response.name
      }
    });
  }).catch(function (e) {
    res.send({
      status: 0,
      message: "Create user failed",
      result: null
    });
  })
});

/*exports.getAllUsers = async(function* (req, res) {
  try {
    const result = yield User.find({});
    res.send({status: 1, result, message: "Hành động thành công"});
  } catch (e) {
    res.send({status: 0, result: null, message: e.message});
  }
});*/

exports.getUser = async(function* (req, res, next) {
  User.findById(req.params.id).then
  /*populate('following').exec*/((err, user) => {
    if (err)
      res.send(err);
    else if (!user)
      res.send(404);
    else
      res.send(user)
    next()
  })
});

exports.followUser = async(function* (req, res, next) {
  User.findById(req.body.id).then((user) => {
    return user.follow(req.body.user_id).then(() => {
      return res.json({msg: "followed"})
    })
  }).catch(next)
});

exports.addUser = async(function* (req, res, next) {
  User.findOne( {email: req.body.email}, function (err, item) {
    console.log(item);

    if (err) throw (err);
    if (item) {
      console.log("hahahaha");
      console.log(item);
      res.send(item);
    } else if (item.length == 0) {
      new User(req.body).save((err, newUser) => {
        if (err)
          res.send(err)
        else if (!newUser)
          res.send(400)
        else
          res.send(newUser)
        next()
      });
    }
  });
});

exports.getUserProfile = async(function* (req, res, next) {
  User.findById(req.params.id).then
  ((_user) => {
    return User.find({'following': req.params.id}).then((_users) => {
      _users.forEach((user_) => {
        _user.addFollower(user_)
      })
      return Article.find({'author': req.params.id}).then((_articles) => {
        return res.json({user: _user, articles: _articles})
      })
    })
  }).catch((err) => console.log(err))
});

exports.login = async(function* (req, res) {
  const user = req.body;
  console.log(req.body);
  res.send({
    status: 1,
    message: "Login success",
    result: {
      id: 1,
      name: "admin"
    }
  });
});

exports.logout = async(function* (req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});