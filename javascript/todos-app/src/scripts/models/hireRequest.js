/**
 * Get data form server
 *
 * @param {string} url the resource that you wish to fetch
 * @returns object
 */
const get = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

/**
 * Add new object to database
 *
 * @param {string} url
 * @param {object} data
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
 * Update to  database
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

/**
 * Remove  to database
 *
 * @param {string} url
 * @param {string} groupId
 */
const remove = async (url) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
};

export { get, post, update, remove };
