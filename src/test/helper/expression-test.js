var expect = require('chai').expect;
var should = require('chai').should;
var Expression = require('../../helper/expression');

describe('Expression helper', function(){
    describe('generate Method', function(){
        it('should return a valid expression', function(done){
            var expression = Expression.generate();
            expect(Expression.validate(expression)).equal(true);
            done();
        });
    });

    describe('validate Method', function(){
        it('should return true for valid expression', function(done){
            var result = Expression.validate('3+4=');
            expect(result).equal(true);
            done();
        });

        it('should return false for invalid expression', function(done){
            var result = Expression.validate('3+=4');
            expect(result).equal(false);
            done();
        });

        it('expect evaluate correct result', function(done){
            var result = Expression.evaluate('3+4=');
            expect(result).equal(7);
            done();
        });

    });
});