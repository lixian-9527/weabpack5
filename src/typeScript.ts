let a: number = 2;
let b: number = 4;
const add = (x: number, y:number): number => {
    return x + y;
};
const obj = {
    name: '猪八戒',
    age: 20
};
// eslint-disable-next-line
console.log(add(a, b));
// eslint-disable-next-line
console.log(obj.name);
// eslint-disable-next-line
console.log(obj.age);
export {
    a,
    b,
    add
}
