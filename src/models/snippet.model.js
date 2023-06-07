const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const snippetSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    content: {
      type: String,
    },
    tags: {
      type: Array,
    },
    created: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
snippetSchema.plugin(toJSON);
snippetSchema.plugin(paginate);

/**
 * @typedef Snippet
 */
const Snippet = mongoose.model('Snippet', snippetSchema);

module.exports = Snippet;
