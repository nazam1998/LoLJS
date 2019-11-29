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
let sauron = new Boss("Sauron", 500, 300);
let chronos = new Boss("Chronos", 500, 300);
let lilith = new Boss("Lilith", 500, 300);

let guerrier = {
    nom: '',
    pV: 0,
    pointAtt: 0,
    pointRage: 0,
    attaque() {
        this.pointAtt *= 1.4;
        this.pV *= 0.75;
    },
    defense() {
        this.pV *= 2.5;
        this.pointAtt *= 0.5;
    },
    rage() {
        rage++;
        if (rage == 4) {
            this.pointAtt *= 1.5;
        }
        if (rage < 4) {
            this.pointAtt /= 1.5;
            rage %= 4;
        }
    }
}
let nbMana = [7, 9, 11];
let r = Math.floor(Math.random() * nbMana.length);
nbMana = nbMana[r];
let mage = {
    nom: '',
    pV: 0,
    pointAtt: 0,
    mana: nbMana,
    attaque() {
        this.pointAtt *= 1.4;
        this.pV *= 0.75;
    },
    defense() {
        this.pV *= 2.5;
        this.pointAtt *= 0.5;
    },
    recharge() {
        if (this.mana < 0) {
            this.mana = 7;
            return false
        } else if (this.mana <= 1) {
            this.mana += 7;
            return false;
        }
        this.mana -= 2;
    }
}
let nbFleches = [7, 8, 9, 10, 11];
r = Math.floor(Math.random() * nbFleches.length);
nbFleches = nbFleches[r];
let archer = {
    nom: '',
    pV: 0,
    pointAtt: 0,
    fleche: nbFleches,
    attaque() {
        this.pointAtt *= 1.4;
        this.pV *= 0.75;
    },
    defense() {
        this.pV *= 2.5;
        this.pointAtt *= 0.5;
    },
    recharge() {
        if (this.fleche < 0) {
            this.fleche = 6;
        } else if (this.fleche == 1) {
            this.fleche += 6;
        } else {
            this.fleche++;
        }
        this.fleche -= 2;
    }
}

let listBoss = [sauron, chronos, lilith];
r = Math.floor(Math.random() * listBoss.length);
let boss = listBoss[r];

alert(`${boss.nom} est le Boss`);
do {
    guerrier.nom = prompt("Veuillez nommer le guerrier.");
    mage.nom = prompt("Veuillez nommer le mage.");
    archer.nom = prompt("Veuillez nommer l'archer.");
} while (guerrier.nom.length == 0, mage.nom.length == 0, archer.nom.length == 0)

let totalPv = 300;
let totalAtt = 300;

alert("Vous avez 300 points en Pv et 300 en Attaque. Veuillez les distribuer entre vos héros.");
alert(`${guerrier.nom} le guerrier`);

if (totalPv > 0) {
    guerrier.pV = prompt(`Combien de points sur ${totalPv} voulez-vous lui assigner en pv?`);
    totalPv -= guerrier.pV;
}
if (totalAtt > 0) {
    guerrier.pointAtt = prompt(`Combien de points sur ${totalAtt} voulez-vous lui assigner en attaque?`);
    totalAtt -= guerrier.pointAtt;
}
alert(`${guerrier.nom} le guerrier  pv:${guerrier.pV}  pa:${guerrier.pointAtt}`);
alert(`${mage.nom} le mage`);
alert(`Il vous reste ${totalPv} en pv et ${totalAtt} en attaque`);
if (totalPv > 0) {
    mage.pV = prompt(`Combien de points sur ${totalPv} voulez-vous lui assigner en pv?`);
    totalPv -= mage.pV;
}
if (totalAtt > 0) {
    mage.pointAtt = prompt(`Combien de points sur ${totalAtt} voulez-vous lui assigner en attaque?`);
    totalAtt -= mage.pointAtt;
}
alert(`${mage.nom} le mage  pv:${mage.pV}  pa:${mage.pointAtt} mana:${mage.mana}`);
alert(`${archer.nom} le archer`);
alert(`Il vous reste ${totalPv} en pv et ${totalAtt} en attaque`);
if (totalPv > 0) {
    archer.pV = prompt(`Combien de points sur ${totalPv} voulez-vous lui assigner en pv?`);
    totalPv -= archer.pV;
}
if (totalAtt > 0) {
    archer.pointAtt = prompt(`Combien de points sur ${totalAtt}. voulez-vous lui assigner en attaque?`);
    totalAtt -= archer.pointAtt;
}
alert(`${archer.nom} l'archer  pv:${archer.pV}  pa:${archer.pointAtt} nbFlèches:${archer.fleche}`);