class Boss {
    constructor(nom, pV, pointAtt) {
        this.nom = nom;
        this.pV = pV;
        this.pointAtt = pointAtt;
    }
    poser() {
        if (this.pv <= (pv * 20 / 100)) {
            let essai = 3;

            let question = Number(prompt("Que donne Math.round(Math.abs(-50.555556)) ?"));
            let rep = 51;
            while (essai > 0 && question != rep) {
                essai--;
                if (essai > 0) {
                    let question = Number(prompt("Que donne Math.round(Math.abs(-50.555556)) ?"));
                }
            }
            if (question == rep) {
                alert("Bravo ! Vous avez vaincu le boss !");
            } else {
                alert("Dommage ! Vous avez échoué.");
            }
        }
    }
}
let Sauron = new Boss("Sauron", 500, 300);
let Chronos = new Boss("Chronos", 500, 300);
let Lilith = new Boss("Lilith", 500, 300);

let guerrier = {
    nom: 'Grognak',
    pV: 100,
    pointAtt: 10,
    pointRage: 0,
    attaque() {
        this.pointAtt *= 1.4;
        this.pV *= 0.75;
    },
    defense() {
        this.pV *= 2.5;
        this.pointAtt *= 0.5;
    }
}