var ctx = {
  name: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "Canada",
};

const personProxy = new Proxy(ctx, {
  get(target, prop) {
    console.log(`The val of ${prop} is ${target[prop]}`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log(`The value changed from ${target[prop]} to ${value}`);
    return Reflect.set(target, prop, value);
  },
});

console.log(personProxy.name);

personProxy.name = "Rana";

console.log(personProxy.name);
