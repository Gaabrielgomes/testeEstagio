class Lampada {
    constructor(nome, acesa, quente) {
        this.nome = nome;
        this.acesa = acesa;
        this.quente = quente;
    }

    acender() {
        this.acesa = true;
        this.quente = true;
    }

    apagar() {
        this.acesa = false;
    }
}

const lampada1 = new Lampada("Lâmpada1", false, false);
const lampada2 = new Lampada("Lâmpada2", false, false);
const lampada3 = new Lampada("Lâmpada3", false, false);
const lampadas = [lampada1, lampada2, lampada3];

let interruptor1 = Math.floor(Math.random() * 3);
let interruptor2, interruptor3;

do {
    interruptor2 = Math.floor(Math.random() * 3);
} while (interruptor2 === interruptor1);

do {
    interruptor3 = Math.floor(Math.random() * 3);
} while (interruptor3 === interruptor1 || interruptor3 === interruptor2);

lampadas[interruptor1].acender();
lampadas[interruptor1].apagar();
lampadas[interruptor2].acender();

lampadas.forEach((lampada) => {
    if (!lampada.acesa && lampada.quente) {
        console.log(`${lampada.nome} é controlada pelo interruptor 1`);
    } else if (lampada.acesa) {
        console.log(`${lampada.nome} é controlada pelo interruptor 2`);
    } else {
        console.log(`${lampada.nome} é controlada pelo interruptor 3`);
    }
});
