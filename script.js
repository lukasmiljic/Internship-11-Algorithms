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
