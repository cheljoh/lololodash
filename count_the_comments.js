var _ = require("lodash");

var worker = function(comments){
  var sorted = _.groupBy(comments, 'username');
  var results = []
  _.forEach(sorted, function (value, key){
    results.push({username: key, comment_count: _.size(value)});
  });
  return _.sortBy(results, "comment_count").reverse();
};

module.exports = worker;
