const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
const SchemaTypes = mongoose.Schema.Types;
const { Schema } = mongoose;
const Role = require('../constants/Role');

const usersSchema = new Schema({
  name: String,
  email: String,
  provider: String,
  provider_id: String,
  token: String,
  provider_pic: String,
  roles: { type: [{ type: String, enum: [Role.USER, Role.ADMIN] }], default: [Role.USER] },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});
const counter = require('./CollectionCounter');
usersSchema.pre('save', function (next) {
  var doc = this;
  counter.incrementId('category', function (err, result) {
    if (err) {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
      next(err);
    } else {
      doc.id = result.value.seq;
      var currentDate = new Date();
      doc.modifiedDate = currentDate;
      if (!doc.createdDate)
        doc.createdDate = currentDate;
      console.log('==================id==================');
      console.log(doc.id);
      console.log('====================================');
      next();
    }
  });
});

usersSchema.methods.follow = function (user_id) {
  if (this.following.indexOf(user_id) === -1) {
    this.following.push(user_id)
  }
  return this.save()
};
usersSchema.methods.addFollower = function (fs) {
  this.followers.push(fs)
};
usersSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    name: this.name,
    email: this.email,
    provider: this.provider,
    provider_id: this.provider_id,
    token: this.token,
    provider_pic: this.provider_pic,
    roles: this.roles,
    followers: this.followers,
    following: this.following,
  };
};
module.exports = mongoose.model('User', usersSchema);