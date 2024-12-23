const filterByKeys = (data: Array<object>, keys: Array<string>): any => {
  const result = data.map(item => {
    return Object.keys(item)
      .filter(key => keys.includes(key))
      .reduce((obj, key) => {
        obj[key] = item[key];
        return obj;
      }, {});
  });

  return result;
};
export { filterByKeys };