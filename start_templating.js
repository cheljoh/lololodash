var _ = require("lodash");

var worker = function(logins){
  return _.template('Hello <%= name %> (logins: <%= number %>)')({name: logins.name, number: logins.login.length})
};

module.exports = worker;
