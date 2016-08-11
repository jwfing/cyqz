var AV = require('leanengine');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(request, response) {
  response.success('Hello world!');
});

AV.Cloud.define('aqi_timer', function(request, response){
  var AQI = require('./robots/aqi.js');
  AQI.check();
  return response.success();
});


module.exports = AV.Cloud;
