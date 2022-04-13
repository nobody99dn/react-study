/**
 * Check empty field
 *
 * @param {string} value
 * @returns boolean
 */
const isRequired = (value) => {
  if (value !== '') {
    return true;
  }

  return false;
};

export { isRequired };
