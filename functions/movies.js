const movies = require('../data/movies.json');

exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify(movies),
});
