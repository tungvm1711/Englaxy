const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-long')(mongoose);
const SchemaTypes = mongoose.Types;

const collectionCounterSchema = new Schema({
  id: {type: String, unique:true},
  seq: { type: Number, default: 0 },
  createdDate: SchemaTypes.Long,
  modifiedDate: SchemaTypes.Long,
});
collectionCounterSchema.statics = {
  incrementId : function (id,callback) {
    return this.collection.findAndModify({
      id
    },[],{ $inc: {
      seq: 1
    }}, {
      "new": true,
      upsert: true
    }, callback);
  }
}
collectionCounterSchema.pre('save', function (next) {
  var currentDate = new Date();
  this.modifiedDate = currentDate;
  if (!this.createdDate)
    this.createdDate = currentDate;
  next();
});
module.exports = mongoose.model('Counter',collectionCounterSchema)