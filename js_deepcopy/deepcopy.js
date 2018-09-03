"use strict";

const test_obj = {ab: 12,
    sc: "string",
    ax: undefined,
    zz: true,
    xc: null,
    target: {qw: 12, bs: "12",
        target2: [1, 23, 4, {af: 14, xc: null}, [1, 4, 87]]
    }
};

function deepCopy (source_obj, new_obj = {}) {
    for (let key in source_obj) {
        if (typeof source_obj[key] !== 'object' || source_obj[key] === null) {
            new_obj[key] = source_obj[key]
        } else if (Array.isArray(source_obj[key])) {
            new_obj[key] = [];
            for (let arr_key in source_obj[key]) {
                if (typeof source_obj[key] !== 'object' || source_obj[key] === null) {
                    new_obj[arr_key] = source_obj[key][arr_key];
                } else {
                    deepCopy(source_obj[key][arr_key], new_obj[arr_key]);
                }
            }
            deepCopy(source_obj[key], new_obj[key]);
        } else {
            new_obj[key] = {};
            deepCopy(source_obj[key], new_obj[key]);
        }
    }
    return new_obj;
}

console.log(test_obj);
console.log(deepCopy(test_obj));