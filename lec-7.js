const test = (...rest) => {
    console.log("rest", rest)
}
const a = 2; const b = 2; const c = 5;
test(a,b,c);

const test2 = (x,y,z) => {
    console.log("spread", x, y, z);
}

const d = [1, 2, 4];
test2(...d);

//Assignment : Practice destructuring of objects
//Spread operator is always used with only array, for object you'll need to destructure.
//rest operator = spread operator.
//Rest can be used on array and object both.

//destructuring means that you're breaking an array or an object.