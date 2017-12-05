/**
 * Created by dongruihe on 2017/12/4.
 */
'use strict';
require('should');
const mylib = require('../index');
let value = 'none';

describe('My First Test', () => {
    describe('Welcome To ShenZhen', () => {
        before( () => value='ShenZhen' );
        after( () => value='none' );
        it('should get "Hello ShenZhen"', () => {
            mylib(value).should.be.eql('Hello ShenZhen');
        });
    });
    describe('Welcome To ShangHai', () => {
        before(() => value = 'ShangHai');
        after(() => value = 'none');
        it('should get "Hello ShangHai"', () => {
            mylib(value).should.be.eql('Hello ShangHai');
        })
    })
});