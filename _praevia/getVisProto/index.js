'use strict';

const getPropertyProto = (obj, prop) => {
  if (obj.hasOwnProperty(prop))
    return obj[prop];

  else if (obj.__proto__ !== null)
    return getPropertyProto(obj.__proto__, prop);

  else
    return undefined;
};

module.exports = getPropertyProto;
