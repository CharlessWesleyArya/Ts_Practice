//Topic: Closure
//Problem:Counter

/* 
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

*/

type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter1(init: number): ReturnObj {
    let temp=init
    return {
        increment:()=>{
        return ++temp
    },
    reset:()=>{
        return temp=init
    },
    decrement:()=>{
        let dec=--temp
        return dec
    }}
};
