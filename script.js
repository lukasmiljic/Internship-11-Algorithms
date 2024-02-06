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

const employees = [];
const jobs = [];
do {
  let employee = {
    firstname: prompt("enter employee firstname"),
    lastname: prompt("enter employee lastname"),
    job: prompt("enter employee job"),
    job: Number(prompt("enter employee wage")),
  };
  employees.push(employee);

  if (!jobs.some((x) => x.Job == job))
    jobs.push({ Job: job, Avg: pay, Employees: 1 });
  else {
    jobs
      .filter((X) => X.Job === job)
      .map(
        (y) =>
          (y.Avg = (y.Avg * y.Employees + pay) / (y.Employees + 1)) &&
          (y.Employees = y.Employees + 1)
      );
  }
} while (confirm("continue?"));

jobs.sort((x, y) => x.Employees - y.Employees).sort((x, y) => x.Avg - y.Avg);

console.log(jobs);
