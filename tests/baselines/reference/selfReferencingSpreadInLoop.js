//// [selfReferencingSpreadInLoop.ts]
let additional = [];
for (const subcomponent of [1, 2, 3]) {
    additional = [...additional, subcomponent];
}


//// [selfReferencingSpreadInLoop.js]
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++)
        for (var j = 0; j < arguments[i].length; j++)
            ar.push(arguments[i][j]);
    return ar;
};
var additional = [];
for (var _i = 0, _a = [1, 2, 3]; _i < _a.length; _i++) {
    var subcomponent = _a[_i];
    additional = __spreadArrays(additional, [subcomponent]);
}
