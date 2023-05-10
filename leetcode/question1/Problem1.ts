//Topic: Closure 
//Problem: Create Hello World Function
/* 
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */

var createHelloWorld = function() {
    return ()=> "Hello World";
};