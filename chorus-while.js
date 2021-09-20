/*
const chorus = "Let's dance!";
let repeat = 1;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
*/


const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 2 || repeat === 9) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");