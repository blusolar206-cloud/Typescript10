let inputN1 = prompt("Inserisci il primo numero:") || "0";
let inputN2 = prompt("Inserisci il secondo numero:") || "0";
let inputN3 = prompt("Inserisci il terzo numero:") || "0";
let inputN4 = prompt("Inserisci il quarto numero:") || "0";
let n1 = parseInt(inputN1);
let n2 = parseInt(inputN2);
let n3 = parseInt(inputN3);
let n4 = parseInt(inputN4);
let diff1 = n2 - n1;
let diff2 = n3 - n2;
let diff3 = n4 - n3;
console.log("Numeri: " + n1 + ", " + n2 + ", " + n3 + ", " + n4);
console.log("Differenze: " + diff1 + ", " + diff2 + ", " + diff3);
if (diff1 === diff2 && diff2 === diff3) {
    console.log("I numeri sono in progressione aritmetica (ragione = " + diff1 + ").");
}
else {
    console.log("I numeri NON sono in progressione aritmetica.");
}
export {};
//# sourceMappingURL=main.js.map