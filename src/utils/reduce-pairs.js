export default pairs =>
  pairs.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
