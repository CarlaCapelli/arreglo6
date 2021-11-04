let arreglo: number[] = new Array(10);

function Azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}

for (let i: number = 0; i < 10; i++) {
  arreglo[i] = Azar(100);
  console.log("el numero en la posicion", i, "es ", arreglo[i]);
}
