const mongoose = require('mongoose');
const POS = require('../constants/POS');

const { Schema } = mongoose;

const VocabularySchema = new Schema({
  word: { type: String, unique: true, required: true, maxlength: 25 },
  audio: { type: String },
  pronunciation: { type: String, required: true, maxlength: 25 },
  pos: { type: [{ type: String, enum: POS }], required: true },
  definitions: { type: [{ type: String, maxlength: 250, required: true }], required: true },
  examples: { type: [{ type: String, maxlength: 250, required: true }], required: true },
  created: { type: Date, default: Date.now },
  updated: Date,
  users: [String]
});

VocabularySchema.index({ word: 'text', definitions: 'text' });

module.exports = mongoose.model('Vocabulary', VocabularySchema);