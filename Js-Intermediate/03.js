function join(arr1, arr2) {
  var result = [...arr1, ...arr2];
  const obj = {};
  for (let i = 0; i < result.length; i++) {
    obj[result[i].id] = { ...obj[result[i].id], ...result[i] };
  }
  return Object.values(obj);
}

var arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];

var arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

console.log(join(arr1, arr2));
