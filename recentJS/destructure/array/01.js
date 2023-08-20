//Destructuring- Decompose a structure into its individual parts

function getRecords() {
  return [
    {
      name: "Rana",
      email: "rana@gmail.com",
    },
    {
      name: "Rana-12",
      email: "",
    },
    {
      name: "Rana-13",
      email: "rana13@gmail.com",
    },
  ];
}

const [{ name: name, email: email ="abc@gmail.com" }] = getRecords();

console.log(name);
