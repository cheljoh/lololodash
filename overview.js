var _ = require("lodash");

var worker = function(orders) {
  var results = [];

  var grouped = _.groupBy(orders, 'article');

  _.forEach(grouped, function (orders, name) {
    var total = _.reduce(orders, function (sum, order) {
      return sum + order.quantity;
    }, 0);

    results.push({ article: parseInt(name), total_orders: total });
  });

  return _.sortBy(results, 'total_orders').reverse();
};

module.exports = worker;
