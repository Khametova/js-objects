//alert("Hello World");

const customer = {
  firstName: "Adam",
  lastName: "Walker",
  userEmail: " Naruto28@gmail.com ",
  password: "4566783ghs",
  tel: "+7698765432",
  userAdress: {
    city: "NY",
    str: "Riversayd Drayv",
    h: 6,
    country: "USA",
  },

  changeTel(newTel) {
    this.tel = newTel;
  },
  gender: "male",
};
console.log("customer", customer);

/*customer.changeTel(prompt("new tel"));
console.log(customer);

document.write(
  ` <p>${customer.userAdress.city}, ${customer.userAdress.str}, ${customer.userAdress.h}, ${customer.userAdress.country}</p>`
);

*/
console.log(customer.gender);
delete customer.userAdress;
console.log("customer", customer);

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (key in cat) {
  console.log("key", cat);
}
