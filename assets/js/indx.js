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

customer.changeTel(prompt("new tel"));
console.log(customer);

document.write(
  ` <p>${customer.userAdress.city}, ${customer.userAdress.str}, ${customer.userAdress.h}, ${customer.userAdress.country}</p>`
);

console.log(customer.gender);
delete customer.userAdress;
console.log("customer", customer);

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (let key in cat) {
  console.log(`cat : ${key} = ${cat[key]}`);
}

function Book(author, title, year, publisher, prise) {
  this.authorName = author;
  this.bookTitle = title;
  this.yearOfpublication = year;
  this.publisherBook = publisher;
  this.bookOfprice = prise;
}

Book.prototype.changeprice = function (newPrice) {
  this.bookOfprise = newPrice;
};

Book.prototype.typename =
  "1230 Avenue of the Americas, New York, NY 10020, USA";

const book1 = new Book(
  "Stephen King",
  "Holly",
  "2023",
  "Simon & Schuster",
  "100"
);
const book2 = new Book(
  "Stephen King",
  "You like it darker",
  "2024",
  "Simon & Schuster",
  "100"
);
book2.changeprice("250");
const book3 = new Book(
  "Stephen King",
  "The life of Chuck",
  "2025",
  "Simon & Schuster",
  "100"
);

console.log("book1", book1);
console.log("book2", book2);
console.log("book3", book3);
