const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { snippetService } = require('../services');

const getSnippets = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title', 'tag']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await snippetService.queryPosts(filter, options);
  res.send(result);
});

const getSnippet = catchAsync(async (req, res) => {
  const post = await snippetService.getSnippetById(req.params.postId);
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(post);
});

module.exports = {
  getSnippets,
  getSnippet,
};
