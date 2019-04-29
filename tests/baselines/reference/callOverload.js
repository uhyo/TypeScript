//// [callOverload.ts]
declare function fn(x: any): void;
declare function takeTwo(x: any, y: any): void;
declare function withRest(a: any, ...args: Array<any>): void;
var n: number[];

fn(1) // no error
fn(1, 2, 3, 4)
takeTwo(1, 2, 3, 4)
withRest('a', ...n); // no error
withRest();
withRest(...n); 

//// [callOverload.js]
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++)
        for (var j = 0; j < arguments[i].length; j++)
            ar.push(arguments[i][j]);
    return ar;
};
var n;
fn(1); // no error
fn(1, 2, 3, 4);
takeTwo(1, 2, 3, 4);
withRest.apply(void 0, __spreadArrays(['a'], n)); // no error
withRest();
withRest.apply(void 0, n);
