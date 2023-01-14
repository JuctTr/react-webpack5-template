export function square(x) {
    return x * x;
}
/*#__PURE__*/ console.log(square(10));

export function cube(x) {
    return x * x * x;
}

// utils/b.js
// Object.defineProperty(Array.prototype, 'sum', {
//     value: function () {
//         return this.reduce((sum, num) => (sum += num), 0);
//     },
// });
// export function b() {
//     console.log([1, 2, 3, 4].sum());
// }
