const mongoose = require('mongoose');

const { Schema } = mongoose;

const WordsSchema = new Schema({
  title: String,
  frequency: Number,
}, { timestamps: true });

WordsSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    title: this.title,
    frequency: this.frequency,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

mongoose.model('Words', WordsSchema);
