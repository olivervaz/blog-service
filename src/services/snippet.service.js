const { Snippet } = require('../models');
/**
 * Query for snippets
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const querySnippets = async (filter, options) => {
  const snippets = await Snippet.paginate(filter, options);
  return snippets;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Snippet>}
 */
const getSnippetById = async (id) => {
  return Snippet.findById(id);
};

module.exports = {
  querySnippets,
  getSnippetById,
};
