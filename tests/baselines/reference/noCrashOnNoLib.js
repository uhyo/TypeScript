//// [noCrashOnNoLib.ts]
export function f() {
    let e: {}[];
    while (true) {
      e = [...(e || [])];
    }
}

//// [noCrashOnNoLib.js]
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++)
        for (var j = 0; j < arguments[i].length; j++)
            ar.push(arguments[i][j]);
    return ar;
};
exports.__esModule = true;
function f() {
    var e;
    while (true) {
        e = __spreadArrays((e || []));
    }
}
exports.f = f;
