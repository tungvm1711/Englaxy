const mongoose = require('mongoose');
const POS = require('../constants/POS');
const moment = require('moment');
const _ = require('lodash');
const Vocabulary = require('./../models/Vocabulary');
const {wrap: async} = require('co');
const router = require('express').Router();
const fs = require('fs');
const User = require('./../models/User');

const escapeRegex = (text) => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

exports.getAll = async(function* (req, res, next) {
  Vocabulary.find({}).sort({created: 'desc'}).exec((err, vocabularies) => {
    if (err)
      res.send(err);
    else if (!vocabularies)
      res.send(404);
    else
      res.json(vocabularies);
    next()
  })
});

exports.download = async(function* (req, res, next) {
  const {user} = req;

  Vocabulary.getAll((err, vocabularies) => {
    if (err) return res.status(500).send({message: 'Something went wrong getting the data', error: err});

    const data = JSON.stringify(vocabularies);

    res.setHeader('Content-disposition', 'attachment; filename=data.json');
    res.setHeader('Content-type', 'application/json');

    res.write(data, (err) => {
      if (err) return res.status(500).send({message: 'Something went wrong downloading the data', error: err});

      res.end();
    });
  });
});

exports.mark = async(function* (req, res, next) {
  const {params: {id: _id}, user} = req;

  Vocabulary.findById(_id, (err, vocabulary) => {
    if (err) return res.status(500).send({message: 'Something went wrong getting the data', error: err});
    if (!vocabulary) return res.status(404).send({message: 'Data not found', error: err});

    const userId = _.toString(user._id);
    const {users = []} = vocabulary;
    const index = users.findIndex(item => item === userId);

    if (index !== -1) {
      users.splice(index, 1);
    } else {
      users.push(userId);
    }

    Vocabulary.update({_id, users}, (err) => {
      if (err) return res.status(500).send({message: 'Something went wrong updating the data', error: err});

      return res.sendStatus(200);
    });
  });
});

exports.create = async(function* (req, res, next) {
  let {vocabulary = {}} = req.body;
  vocabulary = _.pick(vocabulary, ['word', 'audio', 'pronunciation', 'pos', 'definitions', 'examples']);
  Vocabulary.create(vocabulary, (err, vocabulary) => {
    if (err)
      res.send(err);
    else if (!vocabulary)
      res.send(404);
    else
      res.json(vocabulary);
    next()
  })
});

exports.update = async(function* (req, res, next) {
  let {vocabulary = {}} = req.body;
  vocabulary = _.pick(vocabulary, ['word', 'audio', 'pronunciation', 'pos', 'definitions', 'examples']);
  const {_id} = vocabulary;
  vocabulary.updated = new Date();

  Vocabulary.findOneAndUpdate({_id}, _.omit(vocabulary, ['_id', '__v']), {new: true}, (err, vocabulary) => {
    if (err)
      res.send(err);
    else if (!vocabulary)
      res.send(404);
    else
      res.json(vocabulary);
    next()
  })
});

exports.remove = async(function* (req, res, next) {
  const {params: {id: _id}} = req;

  Vocabulary.findOneAndRemove({_id}, (err) => {
    if (err)
      res.send(err);
    else
      res.sendStatus(200);
    next()
  })
});

exports.findById = async(function* (req, res, next) {
  const {params: {id: _id}} = req;

  Vocabulary.findById(_id, (err, vocabulary) => {
    if (err)
      res.send(err);
    else if (!vocabulary)
      res.send(404);
    else
      res.json(vocabulary);
    next()
  })
});

exports.getMarked = async(function* (req, res, next) {
  const {user} = req;

  Vocabulary.find({users: user._id}).sort({created: 'desc'}).exec((err, vocabularies) => {
    if (err)
      res.send(err);
    else if (!vocabularies)
      res.send(404);
    else
      res.json(vocabularies);
    next()
  })
});

exports.search = async(function* (req, res, next) {
  const {query} = req;
  const {keyword, start = 0, end = 10} = query;
  const criteria = {};
  if (keyword) {
    criteria['$text'] = {$search: keyword};
  }

  Vocabulary.find(criteria).skip(parseInt(start)).limit(parseInt(end)).sort({created: 'desc'}).exec((err, vocabularies) => {
    if (err)
      res.send(err);
    else if (!vocabularies)
      res.send(404);
    else
      res.json(vocabularies);
    next()
  })
});

exports.searchFuzzy = async(function* (req, res, next) {
  const {query} = req;
  const {keyword = '', limit = 5} = query;
  if (keyword.length > 1) {
    const regex = new RegExp(escapeRegex(keyword), 'gi');

    Vocabulary.find({word: regex}).limit(parseInt(limit)).exec((err, vocabularies) => {
      res.json(vocabularies);
    });
  } else {
    res.send(err);
  }

});

exports.getDaily = async(function* (req, res, next) {
  const today = moment().startOf('day');
  const tomorrow = moment(today).add(1, 'days');

  Vocabulary.find({
    created: {
      $gte: today.toDate(),
      $lt: tomorrow.toDate()
    }
  }).sort({created: 'desc'}).exec((err, vocabularies) => {
    if (err)
      res.send(err);
    else if (!vocabularies)
      res.send(404);
    else
      res.json(vocabularies);
    next()
  })
});

exports.getRandom = async(function* (req, res, next) {
  const {query} = req;
  const {size = 5} = {query};

  Vocabulary.aggregate([{$sample: {size: parseInt(size)}}]).exec((err, vocabularies) => {
    if (err)
      res.send(err);
    else if (!vocabularies)
      res.send(404);
    else
      res.json(vocabularies);
    next()
  })
});
exports.getPOS = async(function* (req, res, next) {
  return res.json(POS);
});