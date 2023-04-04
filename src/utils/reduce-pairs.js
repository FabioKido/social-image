exports.reducePairs = pairs => pairs.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
