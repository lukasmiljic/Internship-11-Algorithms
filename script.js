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
const fruits = [];
do {
  let fruit = {
    name: prompt("enter fruit name"),
    color: prompt("enter fruit color"),
    calories: prompt("enter fruit calories"),
  };
  fruits.push(fruit);
} while (confirm("continue?"));

const fruitsByColor = fruits.reduce((acc, fruit) => {
  const { name, color, calories } = fruit;
  acc[color] = acc[color] || { totalCalories: 0, fruits: [] };
  acc[color].totalCalories += calories;
  acc[color].fruits.push(name);
  return acc;
}, {});

console.log(fruitsByColor.sort());
