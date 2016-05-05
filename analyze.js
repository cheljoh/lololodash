var _ = require("lodash");

var worker = function(group){
  var sum = _.reduce(group, function(sum, freelancer){
    return sum + freelancer.income;
  }, 0);

  var average = sum/group.length
  var underperform = _.chain(group)
    .filter(function(freelancer){
      return freelancer.income <= average;
    })
    .sortBy('income');

  var overperform = _.chain(group)
    .filter(function(freelancer){
      return freelancer.income > average;
    })
    .sortBy('income');

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = worker;
