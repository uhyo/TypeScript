//// [spreadBooleanRespectsFreshness.ts]
type Foo = FooBase | FooArray;
type FooBase = string | false;
type FooArray = FooBase[];

declare let foo1: Foo;
declare let foo2: Foo;
foo1 = [...Array.isArray(foo2) ? foo2 : [foo2]];

//// [spreadBooleanRespectsFreshness.js]
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++)
        for (var j = 0; j < arguments[i].length; j++)
            ar.push(arguments[i][j]);
    return ar;
};
foo1 = __spreadArrays(Array.isArray(foo2) ? foo2 : [foo2]);
