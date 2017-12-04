/**
 * Created by dongruihe on 2017/12/4.
 */
'use strict';
require('should');
const mylib = require('../index');

describe('My First Test', () => {
    it('should get "Hello Word"', () => {
        mylib().should.be.eql('Hello Word');
    });
});