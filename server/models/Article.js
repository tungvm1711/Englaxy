const mongoose = require('mongoose');
const {Schema} = mongoose;
const SchemaTypes = mongoose.Schema.Types;

const ArticleSchema = new Schema({
  text: String,
  title: String,
  description: String,
  feature_img: String,
  claps: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  commentss: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: String
    }
  ]
});

ArticleSchema.methods.clap = function () {
  this.claps++;
  return this.save()
};

ArticleSchema.methods.comment = function (c) {
  this.comments.push(c);
  return this.save()
};

ArticleSchema.methods.addAuthor = function (author_id) {
  this.author = author_id;
  return this.save()
};

ArticleSchema.methods.getUserArticle = function (_id) {
  Article.find({'author': _id}).then((article) => {
    return article
  })
};

module.exports = mongoose.model('Article', ArticleSchema);