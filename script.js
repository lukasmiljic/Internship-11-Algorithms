// 1.
// Korisnik redom upisuje ime, cijenu i boju proizvoda. Nakon unosa se pita
// korisnika želi li nastaviti sa unosom i unosi se  sve dok se korisnik ne odbije
// unos.Zadatak je izračunati prosječnu cijenu i ispisati proizvod koji najviše
// odstupa od prosjeka
//
// let x;
// let products = [];
// do {
//   let product = {
//     name: prompt("enter product name"),
//     price: Number(prompt("enter product price")),
//     // color: prompt("enter product color"),
//   };
//   products.push(product);
//   x = confirm("continue entering new products");
// } while (x);

// let avg = products.reduce((a, b) => a + b.price, 0) / products.length;

// let max_deviation = products[0];
// products.forEach((product) => {
//   if (avg - product.price > max_deviation.price) max_deviation = product;
// });
// console.log(max_deviation);

// 2.
// Korisnik redom upisuje ime, prezime i zanimanje i plaću osobe. Unos se obavlja
// isto kao u prvom zadatku(tako i u ostalim zadacima ovog tipa). Cilj zadatka je
// izračunati prosjek plaće za svako zanimanje i ispisati sortirano objekte gdje
// piše zanimanje, prosjek i koliko osoba radi to zanimanje.
// const employees = [];
// const jobs = [];
// do {
//   let employee = {
//     firstname: prompt("enter employee firstname"),
//     lastname: prompt("enter employee lastname"),
//     job: prompt("enter employee job"),
//     pay: Number(prompt("enter employee wage")),
//   };
//   employees.push(employee);

//   if (!jobs.some((x) => x.Job == job))
//     jobs.push({ Job: job, Avg: pay, Employees: 1 });
//   else {
//     jobs
//       .filter((X) => X.Job === job)
//       .map(
//         (y) =>
//           (y.Avg = (y.Avg * y.Employees + pay) / (y.Employees + 1)) &&
//           (y.Employees = y.Employees + 1)
//       );
//   }
// } while (confirm("continue?"));

// jobs.sort((x, y) => x.Employees - y.Employees).sort((x, y) => x.Avg - y.Avg);

// console.log(jobs);

// 3.
// Isti unos kao u drugom zadatku. Treba izračunati zbroj svih plaća zajedno i ispisati
// objekt u kojem se nalazi ime zanimanja, postotak koliko to zanimanje pridonosi ukupnoj plaći,
// i nizu objekata koji se sastoje od imena osobe i postotak koliko ta osoba pridonosi ukupnoj
// plaći zanimanja
// const employees = [];
// const jobs = [];
// do {
//   let employee = {
//     firstname: prompt("enter employee firstname"),
//     lastname: prompt("enter employee lastname"),
//     job: prompt("enter employee job"),
//     percent: 0,
//     pay: Number(prompt("enter employee pay")),
//   };
//   employees.push(employee);

//   if (!jobs.some((x) => x.Job == job))
//     jobs.push({ job: employee.job, total: employee.pay, percent: 100 });
//   else {
//     jobs
//       .filter((X) => X.Job === employee.job)
//       .map((y) => (y.total = total += y.pay) && y.percent /**/);
//   }
// } while (confirm("continue?"));

// let totalpay = employees.reduce((a, b) => a + b.price, 0);

// jobs.sort((x, y) => x.Employees - y.Employees).sort((x, y) => x.Avg - y.Avg);

// console.log(jobs);

// 4.
// Unijeti niz voća sa imenom, bojom i kalorijama.Cilj je ispisati svo voće sa istom
// bojom i koliko ukupno kalorija to voće daje.Neka se sortira po imenu boje.
// const fruits = [];
// do {
//   let fruit = {
//     name: prompt("enter fruit name"),
//     color: prompt("enter fruit color"),
//     calories: prompt("enter fruit calories"),
//   };
//   fruits.push(fruit);
// } while (confirm("continue?"));

// const fruitsByColor = fruits.reduce((acc, fruit) => {
//   const { name, color, calories } = fruit;
//   acc[color] = acc[color] || { totalCalories: 0, fruits: [] };
//   acc[color].totalCalories += calories;
//   acc[color].fruits.push(name);
//   return acc;
// }, {});

// console.log(fruitsByColor.sort());

//5.
// Korisnik redom upisuje imena, prezimena i bodove sportaša.Cilj je stvoriti 4
// kategorije sportaša po broju bodova(stvorit ih na način da ide 0 - 25 % osobe
// sa maksimum bodova, 25 - 50 %, 50 - 75 %, 75 - 100 %).Cilj je ispisati
// sportaše svake kategorije, sortirane po prezimenu i da su napisani u
// formatu prezime ime.
// const athletes = [];
// do {
//   athlete = {
//     name: prompt("athlete name"),
//     lastname: prompt("athlete lastname"),
//     points: +prompt("athlete points"),
//     category: 0,
//   };
// } while (!confirm("continue?"));
// const max = athletes.reduce((a, b) => Math.max(a, b.points), -Infinity);

// for (let index = 0; index < athletes.length; index++) {
//   if (athletes[index].points <= 0.25 * max) athletes[index].category = 0;
//   else if (athletes[index].points <= 0.5 * max) athletes[index].category = 1;
//   else if (athletes[index].points <= 0.75 * max) athletes[index].category = 2;
//   else athletes[index].category = 3;
// }
// athletes.forEach((arr) => {
//   console.log(arr);
// });

// 6.
// Upisati ime, cijenu i dostupnost proizvoda.Ispisati indexe svih nedostupnih proizvoda
// i napraviti novi niz sa dostupnim voćem.Sortirati ga po cijeni, a ako je ista
// cijena po imenu voća te ispisati taj niz.Na kraju ispisati koliko posto ukupne cijene
// svih proizvoda doprinosi nedostupno voće
// let products = [
//   { name: "a", price: 15, available: true },
//   { name: "a", price: 150, available: true },
//   { name: "b", price: 150, available: true },
//   { name: "b", price: 50, available: false },
//   { name: "c", price: 50, available: false },
// ];
// let products = [];
// do {
//   let product = {
//     name: prompt("product name"),
//     price: Number(prompt("prodcut price")),
//     available: confirm("available"),
//   };
//   products.push(product);
// } while (confirm("continue"));

// console.log("index of unavailable products");
// for (let index = 0; index < products.length; index++) {
//   if (products[index].available == false) console.log(index);
// }

// console.log("available products");
// const availableProducts = products
//   .filter((product) => product.available)
//   .sort((a, b) => {
//     if (a.price === b.price) {
//       return a.name.localeCompare(b.name);
//     }
//     return a.price - b.price;
//   });
// console.log(availableProducts);

// console.log("unavailable products price percentage");
// let UnavailableProducts = products.filter((x) => x.available == false);
// let UnavailableProductsTotal = UnavailableProducts.reduce(
//   (a, b) => a + b.price,
//   0
// );
// let totalPrice = products.reduce((a, b) => a + Number(b.price), 0);
// console.log(
//   parseFloat((UnavailableProductsTotal / totalPrice) * 100).toFixed(2) + "%"
// );

// 7.
// Isti unos kao u 6. zadatku. Iz niza voća napraviti novi niz gdje svim dostupnim
// voćima je boja crvena i svim nedostupnim žuta, sortirati ih po boji pa po
// imenu i ispisati niz.
// let fruits = [];
// do {
//   let fruit = {
//     name: prompt("fruit name"),
//     color: "",
//     available: confirm("is fruit available"),
//   };
//   fruit.available ? (fruit.color = "red") : (fruit.color = "yellow");
//   fruits.push(fruit);
// } while (confirm("continue"));

// fruits.sort((a, b) => {
//   if (a.color != b.color) return a.color.localeCompare(b.color);
//   return a.name.localeCompare(b.name);
// });

// console.log(fruits);

// 8.
// Riješi problem Gaussove dosjetke koristeći petlje i JS ugrađene funkcije nad nizovima
// (zabranjeno korištenje formule). Sami napravite array s prvih 100 prirodnih brojeva
// (bonus points ako napravit bez petlje)
// let nums = Array.from(new Array(100), (x, i) => i + 1);
// let total = nums.reduce((a, b) => a + b);

// 9.
// Traži unos imena osoba, sortiraj ih i filtriraj da budu imena sa više od 5 slova
// te ih ispiši u csv formatu(comma seperated values)
// let people = [
//   { name: "aaaaaaaa", lastname: "a" },
//   { name: "bbbbbbbb", lastname: "a" },
//   { name: "aaabbbbb", lastname: "a" },
//   { name: "1234", lastname: "a" },
// ];
// let people = [];
// do {
//   let person = {
//     name: prompt("enter person name"),
//     lastname: prompt("enter person lastname"),
//   };
// } while (confirm("continue?"));
// filteredPeople = people
//   .filter((x) => x.name.length >= 5)
//   .sort((a, b) => a.name.localeCompare(b.name));

// const csvString = [
//   ["Name"],
//   ...filteredPeople.map((person) => [person.name, person.lastname]),
// ]
//   .map((e) => e.join(","))
//   .join("\n");

// 10.
// Isti unos kao u četvrtom zadatku. Neka program izračuna najmanje moguće novaca
// koliko treba da se kupi sve boje voća barem jedanput.Ispis je konačna cijena i
// svi kupljeni proizvodi sortirani po količini slova u imenu.
let fruits = [
  { name: "a", color: "red", price: 15 },
  { name: "b", color: "red", price: 150 },
  { name: "c", color: "blue", price: 5 },
  { name: "d", color: "yellow", price: 10 },
];
// do {
//   let fruit = {
//     name: prompt("enter fruit name"),
//     color: prompt("enter fruit color"),
//     price: +prompt("enter fruit price"),
//   };
//   fruits.push(fruit);
// } while (confirm("continue?"));

const cheapestFruitsByColor = {};

fruits.forEach((fruit) => {
  if (
    !cheapestFruitsByColor[fruit.color] ||
    cheapestFruitsByColor[fruit.color].price > fruit.price
  ) {
    cheapestFruitsByColor[fruit.color] = fruit;
  }
});

const CheapestFruitsByColor = Object.values(cheapestFruitsByColor).sort(
  (a, b) => a.name.length - b.name.length
);

const minCost = CheapestFruitsByColor.reduce((a, b) => a + b.price, 0);
console.log(minCost);
console.log(cheapestFruitsByColor);
