var contadorA = 0;
var a = 1;
while (contadorA < 4) {
    a = a + 2;
    contadorA++;
}
console.log(`a) 1, 3, 5, 7, ${a} `);

var contadorB = 0;
for (var b = 2; contadorB < 6; b = b * 2) {
    contadorB++;
}
console.log(`b) 2, 4, 8, 16, 32, 64, ${b}`);

var contadorC = 0;
for (var c = 0; contadorC < 7; c = contadorC ** 2) {
    contadorC++;
}
console.log(`c) 0, 1, 4, 9, 16, 25, 36, ${c}`);

var contadorD = 2;
for (var d; contadorD < 10; d = contadorD ** 2) {
    contadorD += 2;
}
console.log(`d) 4, 16, 36, 64, ${d}`);

var contadorE = 0;
var eAnterior1 = 0;
var eAnterior2 = 0;
for (var e = 1; contadorE < 6; contadorE++) {
    eAnterior2 = eAnterior1;
    eAnterior1 = e;
    e = eAnterior2 + eAnterior1;
}
console.log(`e) 1, 1, 2, 3, 5, 8, ${e}`);

var contadorF = 0;
var fAnterior = 0;
for (var f = 2; contadorF < 7; contadorF++) {
    if (fAnterior < f) {
        f += 8;
    }
    if (f >= 16) {
        f += 1;
    } else {
        f += 2;
    }
    fAnterior = f;
}
console.log(`f) 2, 10, 12, 16, 17, 18, 19, ${f}`);
