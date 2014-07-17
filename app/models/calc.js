'use strict';

function Calc(){}

Calc.add = function(num1, num2){
  return num1 + num2;
};

Calc.sub = function(num1,num2){
  return num1 - num2;
};

Calc.distance = function(p1, p2){
  var a = p2.x - p1.x;
  var b = p2.y - p1.y;
  var c = Math.sqrt((a * a) + (b * b));
  return c;
};

Calc.line = function(p1,p2){
  var m = (p2.y - p1.y) / (p2.x - p1.x);
  var b = p1.y - (m * p1.x);
  var line = ('y = ' + m.toFixed(1) + ('x + ') + b.toFixed(1));
  return line;
};

Calc.trip = function(t){
  var sum = 0;

  for(var i = 0; i < (t.length - 1); i++){
    sum += (Calc.distance(t[i], t[i+1])); 
  }
  return sum;
};

Calc.mean = function(nums){
  var sum = 0;
  var avg = 0;

  for(var i = 0; i < (nums.length); i++){
    sum += nums[i]; 
  }

  avg = (sum / (nums.length));

  return avg;
};

module.exports = Calc;


