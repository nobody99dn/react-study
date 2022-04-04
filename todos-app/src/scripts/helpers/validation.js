const isRequired = (value) => {
  if (value !== '') {
    return true;
  }

  return false;
};

export { isRequired };
