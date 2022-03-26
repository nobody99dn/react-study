/**
 * Get data form server
 *
 * @param {string} url the resource that you wish to fetch
 * @returns promise
 */
const get = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

/**
 * Add data to server
 *
 * @param {string} url the resource that you wish to fetch
 * @param {object} data the the data that you wish to into server
 * @returns object
 */
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

/**
 * Update group to server
 *
 * @param {string} url
 * @param {object} updateGroup
 * @returns object
 */
const update = async (url, updateGroup) => {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateGroup)
  });

  return await response.json();
};

const remove = async (url, groupId) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
};
export { get, post, update, remove };
