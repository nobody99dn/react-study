/**
 * Get data form server
 *
 * @param {string} url the resource that you wish to fetch
 * @returns promise
 */
const get = async (url) => {
  const response = await fetch(url);
  return response.json();
};

/**
 * Get task = list id to fetch and return data from json
 */
const getTasks = async (url, taskId) => {
  const response = await fetch(`${url}/?id=${taskId}`);
  return response.json();
};

const post = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return await response.json();
};

export { get, post, getTasks };
