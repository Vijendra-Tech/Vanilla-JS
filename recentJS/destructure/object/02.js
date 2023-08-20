//Destructure param

function data({ a, b } = {}) {}

//nested array and Nested Object

var nested ={
    a:1,
    b:2,
    c:[4,6]
}

var {
    a,
    b,
    c:[e,f]=[]
}  =nested

console.log(a,b,e,f);
