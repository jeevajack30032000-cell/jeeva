// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 2000);
// });
// promise
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Data loaded");
//     }, 2000);
//   });
// }

// async function showData() {
//   const result = await fetchData();
//   console.log(result);
// }

// showData();

console.log(`estimated tax(10%):   $${Math.round(((2*2095)+(2*799)+998)*10/100)/100}`);
