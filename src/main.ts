let inputN1: string = prompt("Inserisci il primo numero:") || "0";
let inputN2: string = prompt("Inserisci il secondo numero:") || "0";
let inputN3: string = prompt("Inserisci il terzo numero:") || "0";
let inputN4: string = prompt("Inserisci il quarto numero:") || "0";

let n1: number = parseInt(inputN1);
let n2: number = parseInt(inputN2);
let n3: number = parseInt(inputN3);
let n4: number = parseInt(inputN4);

let diff1: number = n2 - n1;
let diff2: number = n3 - n2;
let diff3: number = n4 - n3;
console.log("Numeri: " + n1 + ", " + n2 + ", " + n3 + ", " + n4);
console.log("Differenze: " + diff1 + ", " + diff2 + ", " + diff3);
if (diff1 === diff2 && diff2 === diff3) {
  console.log("I numeri sono in progressione aritmetica (ragione = " + diff1 + ").");
} else {
  console.log("I numeri NON sono in progressione aritmetica.");
}