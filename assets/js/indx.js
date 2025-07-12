//alert("Hello World");

const customer = {
  firstName: "Adam",
  lastName: "Walker",
  userEmail: " Naruto28@gmail.com ",
  password: "4566783ghs",
  tel: +7698765432,
  userAdress: {
    city: "NY",
    str: "Riversayd Drayv",
    h: 6,
    country: "USA",
  },

  changeTel(newTel) {
    this.tel = newTel;
  },
};
console.log("customer", customer);

customer.changeTel(prompt("new tel"));
console.log(customer);

document.write(
  ` <p>${customer.userAdress.city}, ${customer.userAdress.str}, ${customer.userAdress.h}, ${customer.userAdress.country}</p>`
);
