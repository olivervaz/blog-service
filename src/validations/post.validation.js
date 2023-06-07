const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getPosts = {
  query: Joi.object().keys({
    title: Joi.string(),
    tag: Joi.array(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPost = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getPosts,
  getPost,
};
