var _ = require("lodash");

function checkTemp(temp){
  return temp > 19
}

results = { hot: [], warm: [] };

var worker = function(cities){
  _.forEach(cities, function(city, cityName){
    if (_.every(city, checkTemp)){
      results.hot.push(cityName);
    }
    else if (_.some(city, checkTemp)){
      results.warm.push(cityName)
    }
    });
    return results;
  };

module.exports = worker;
