/**
 * GET method
 */

const get = async (url) => {
  const response = await fetch(url).then((res) => res.json());

  return response;
};

export { get };
