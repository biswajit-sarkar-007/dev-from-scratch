"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupInput = void 0;
exports.isOdd = isOdd;
exports.firstEl = firstEl;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
console.log("happy new year 2026");
function isOdd(a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function firstEl(arr) {
    return arr[0];
}
