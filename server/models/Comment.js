const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;