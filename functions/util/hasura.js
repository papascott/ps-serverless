const fetch = require('node-fetch');

// eslint-disable-next-line no-shadow
async function query({ query, variables = {} }) {
  const result = await fetch(process.env.HASURA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({ query, variables }),
  }).then((response) => response.json());

  // TODO show helpful info if there's an error

  return result.data;
}

exports.query = query;
