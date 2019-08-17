const mongoose = require('mongoose');
const {wrap: async} = require('co');
const router = require('express').Router();
/*
const Words = mongoose.model('Words');
*/
const Words = require('./../models/Words');

const retextKeywords = require("retext-keywords");
const vfile = require('to-vfile');
const retext = require('retext');
const keywords = require('retext-keywords');
const toString = require('nlcst-to-string');
const fs = require('fs');
const Client = require('node-rest-client').Client;
const client = new Client();

global.v1 = [];
global.v2=[];
global.v3=[];
function done(err, file) {
  if (err) throw err;
  let array = [];
  console.log('Keywords:');
  file.data.keywords.forEach(function (keyword) {
    console.log(toString(keyword.matches[0].node))
    global.v1.push(toString(keyword.matches[0].node));
    client.get("http://urbanscraper.herokuapp.com/define/"+toString(keyword.matches[0].node), function (data, response) {
      global.v3.push(toString(data.definition));

      // parsed response body as js object
      console.log(data.term+" : " + data.definition);
      // console.log(response);
    });
  });

  console.log();
  console.log('Key-phrases:');
  file.data.keyphrases.forEach(function (phrase) {
    console.log(phrase.matches[0].nodes.map(stringify).join(''));
    global.v2.push(phrase.matches[0].nodes.map(stringify).join(''));
    function stringify(value) {
      return toString(value)
    }
  })
}

const readFile = async (filepath, regex) => {
  let result = [];
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) reject(err);
      result = data.split(regex);
      resolve(result);
    });
  });
};

exports.getSampleWords = async(function* (req, res) {
  try {
    const result = readFile('../../lemma', /\n/);
    res.send({
      status: 1, result: {
        data: result
      }, message: "Hành động thành công"
    });
  } catch (e) {
    res.send({status: 0, result: null, message: e.message});
  }
});

exports.getKeyWords = async(function* (req, res) {
  let array = [];
  /*Purchase all your custom t shirts for less when you go through Logo Rush! We provide you with the
  largest selection of cheap t shirts in the world. When you order personalized t shirts from Logo Rush
  you know you are receiving the highest quality promotional items possible. No matter what the occasion,
  we provide you with quality screen printed t shirts quickly and professionally. Call Logo Rush
  today and place your order for t shirt printing and other promotional products!*/
  const keyWordss = retext()
    .use(keywords)
    .process(req.body.value, done);
  try {
    res.send({status: 1, keywords: v1, keyphrases: v2, keymeaning: v3, message: "Hành động thành công"});
    global.v1 = [];
    global.v2=[];    global.v3=[];
  } catch (e) {
    res.send({status: 0, result: null, message: e.message});
  }
});
