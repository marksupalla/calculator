'use strict';
/*global describe, it*/
var expect = require('chai').expect;
var Calc = require('../../app/models/calc');

describe('Calc', function(){
  describe('.add',  function(){
    it('should add two numbers', function(){
      var sum = Calc.add(2,3);
      expect(sum).to.equal(5);
    });
  });

  describe('.sub',  function(){
    it('should subtract two numbers', function(){
      var sum = Calc.sub(6,2);
      expect(sum).to.equal(4);    
    });
  });

  describe('.distance', function(){
    it('should find the distance between two points', function(){
    var d = Calc.distance({x:1,y:3},{x:4,y:7});
    expect(d).to.equal(5);
    });
  });

});
  describe('.line', function(){
    it('should find the slope of a line', function(){
    var y = Calc.line({x:1,y:3},{x:4,y:7});
    expect(y).to.equal('y = 1.3x + 1.7');
    y = Calc.line({x:4,y:7},{x:10,y:3});
    expect(y).to.equal('y = -0.7x + 9.7');
    });
  });

  describe('.trip',function(){
    it('should find the trip distance', function(){
      var tripArray = [{x:1,y:1},{x:3,y:1},{x:4,y:3},{x:5,y:4},{x:6,y:6},{x:7,y:4},{x:9,y:8}];
      var t = Calc.trip(tripArray);
      expect(t).to.be.closeTo(14.59, 0.01);
    });
  });
  
  describe('.mean',function(){
    it('should find the average of an array of numbers', function(){
      var mean = Calc.mean([10, 32, 44, 65, 44]);
      expect(mean).to.be.equal(39);
  });
  });
  
  describe('.stdev',function(){
    it('should find the standard deviation of an array of numbers', function(){
      var x = Calc.stdev([10, 32, 44, 65, 44]);
      expect(x).to.be.closeTo(17.97, 0.01);
  });
  });

